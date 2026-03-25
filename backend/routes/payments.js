const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
const Inquiry = require('../models/Inquiry');
const { sendPaymentStatusEmail } = require('../utils/mailer');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const EASEBUZZ_KEY = process.env.EASEBUZZ_KEY || 'DHXA8WLRV3';
const EASEBUZZ_SALT = process.env.EASEBUZZ_SALT || 'O5GTSZOD9O';
// This key is a LIVE key, so it must ALWAYS use the LIVE environment. Testpay will reject it.
const EASEBUZZ_ENV = process.env.EASEBUZZ_ENV || 'live';
// Helper: SHA-512 hash
const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

// @route   POST /api/payments/initiate
// @desc    Generate payment hash and initiate payment link with Easebuzz
// @access  Public
router.post('/initiate', async (req, res) => {
    try {
        const { inquiryId } = req.body;

        const inquiry = await Inquiry.findById(inquiryId);
        if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });

        const txnid = "TXN_" + Date.now();
        const amount = '21000'; // Simplifying to integer string
        const productinfo = 'Registration';
        const firstname = inquiry.name;
        const email = inquiry.email;
        const phone = inquiry.phone;
        const backendBase = process.env.BACKEND_URL;
        const surl = `${backendBase}/api/payments/easebuzz-response`;
        const furl = `${backendBase}/api/payments/easebuzz-response`;

        // Save txnid to Inquiry document for later lookup
        inquiry.txnid = txnid;
        await inquiry.save();

        // Explicit empty UDFs for hash
        const udf1 = '', udf2 = '', udf3 = '', udf4 = '', udf5 = '', udf6 = '', udf7 = '', udf8 = '', udf9 = '', udf10 = '';

        // Hash sequence per user request:
        const hashStr = `${EASEBUZZ_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}|${udf6}|${udf7}|${udf8}|${udf9}|${udf10}|${EASEBUZZ_SALT}`;
        const hash = sha512(hashStr);

        // Form data for Easebuzz API initiation
        const postData = new URLSearchParams();
        postData.append('key', EASEBUZZ_KEY);
        postData.append('txnid', txnid);
        postData.append('amount', amount);
        postData.append('productinfo', productinfo);
        postData.append('firstname', firstname);
        postData.append('email', email);
        postData.append('phone', phone);
        postData.append('surl', surl);
        postData.append('furl', furl);
        postData.append('hash', hash);
        // Include location details as they are often required for live merchants
        postData.append('address1', inquiry.address || '');
        postData.append('city', inquiry.city || '');
        postData.append('state', inquiry.state || '');
        postData.append('country', 'India');
        postData.append('zipcode', inquiry.pinCode || '');
        // Explicitly include all UDFs as empty strings in body
        for (let i = 1; i <= 10; i++) postData.append(`udf${i}`, '');

        const initiateUrl = 'https://pay.easebuzz.in/payment/initiateLink';

        const postDataStr = postData.toString();

        const response = await axios.post(initiateUrl, postDataStr, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        });

        if (response.data && response.data.status === 1) {
            const accessKey = response.data.data;

            return res.json({
                success: true,
                paymentUrl: `https://pay.easebuzz.in/pay/${accessKey}`
            });
        } else {
            console.error('--- Easebuzz API Fail Details ---');
            console.error('Account Key:', EASEBUZZ_KEY);
            console.error('Full Error Response:', response.data);

            console.warn('Easebuzz API initiation failed. Falling back to standard form POST.');
            // Fallback: return everything needed for standard form submission
            return res.json({
                success: true,
                status: 0,
                key: EASEBUZZ_KEY,
                txnid,
                amount,
                productinfo,
                firstname,
                email,
                phone: phone || '',
                surl,
                furl,
                hash,
                paymentUrl: 'https://pay.easebuzz.in/pay/'
            });
        }


    } catch (error) {
        console.error('Payment initiate error:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Failed to initiate payment', error: error.message });
    }
});


// @route   POST /api/payments/easebuzz-response
// @desc    Handle Easebuzz payment success/failure response (surl / furl)
// @access  Public (called by Easebuzz redirect)
router.post('/easebuzz-response', async (req, res) => {
    try {
        const {
            status, txnid, amount, productinfo, firstname, email, hash,
            udf1, udf2, udf3, udf4, udf5, udf6, udf7, udf8, udf9, udf10,
            easepayid
        } = req.body;

        // Verify reverse hash
        // Formula: salt|status|udf10|udf9|udf8|udf7|udf6|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
        const reverseHashStr = `${EASEBUZZ_SALT}|${status}|${udf10 || ''}|${udf9 || ''}|${udf8 || ''}|${udf7 || ''}|${udf6 || ''}|${udf5 || ''}|${udf4 || ''}|${udf3 || ''}|${udf2 || ''}|${udf1 || ''}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${EASEBUZZ_KEY}`;
        const expectedHash = sha512(reverseHashStr);
        const hashValid = (hash === expectedHash);

        if (!hashValid) {
            console.warn('Hash mismatch for txnid:', txnid);
        }

        const paymentStatus = (status === 'success' && hashValid) ? 'completed' : 'failed';

        const inquiry = await Inquiry.findOneAndUpdate(
            { txnid: txnid },
            { payment_status: paymentStatus, easepayid: easepayid || '' },
            { new: true }
        );


        if (inquiry) {
            await sendPaymentStatusEmail(
                inquiry.email, inquiry.name, inquiry.fatherName, inquiry.address,
                inquiry.phone, inquiry.aadhaar, inquiry.city, inquiry.state,
                inquiry.pinCode, inquiry.quota, inquiry.plotSize,
                paymentStatus, easepayid || txnid
            );
        }

        const frontendBase = process.env.FRONTEND_URL || 'http://localhost:8080';
        return paymentStatus === 'completed'
            ? res.redirect(`${frontendBase}/check-status?payment=success`)
            : res.redirect(`${frontendBase}/?payment=failed`);

    } catch (error) {
        console.error('Easebuzz response error:', error);
        res.status(500).json({ message: 'Failed to process payment response', error: error.message });
    }
});

// @route   POST /api/payments/update-status
// @desc    Manually update payment status (admin use)
// @access  Public
router.post('/update-status', async (req, res) => {
    try {
        const { inquiryId, status } = req.body;
        const inquiry = await Inquiry.findByIdAndUpdate(
            inquiryId, { payment_status: status }, { new: true }
        );
        if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
        res.json({ message: 'Payment status updated', inquiry });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update payment status', error: error.message });
    }
});

module.exports = router;
