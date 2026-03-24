const express = require('express');
const crypto = require('crypto');
const Inquiry = require('../models/Inquiry');
const { sendPaymentStatusEmail } = require('../utils/mailer');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const EASEBUZZ_KEY = process.env.EASEBUZZ_KEY || 'DHXA8WLRV3';
const EASEBUZZ_SALT = process.env.EASEBUZZ_SALT || 'O5GTSZOD9O';
// This key is a LIVE key, so it must ALWAYS use the LIVE environment. Testpay will reject it.
const EASEBUZZ_ENV = process.env.EASEBUZZ_ENV || 'live';

// Helper: SHA-512 hash (done on backend so key/salt never exposed to frontend)
const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

// @route   POST /api/payments/initiate
// @desc    Generate payment hash and return form fields to submit to Easebuzz
// @access  Public
router.post('/initiate', async (req, res) => {
    try {
        const { inquiryId } = req.body;

        const inquiry = await Inquiry.findById(inquiryId);
        if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });

        const txnid = inquiry._id.toString();
        const amount = '21000.00';
        const productinfo = 'Registration';
        const firstname = inquiry.name;
        const email = inquiry.email;
        const phone = inquiry.phone;
        const backendBase = process.env.BACKEND_URL || 'http://localhost:7002';
        const surl = `${backendBase}/api/payments/easebuzz-response`;
        const furl = `${backendBase}/api/payments/easebuzz-response`;

        // Hash sequence per Easebuzz docs:
        // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt
        const hashStr = `${EASEBUZZ_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${EASEBUZZ_SALT}`;
        const hash = sha512(hashStr);

        const isTest = EASEBUZZ_ENV === 'test';
        // Correct Action URL for Easebuzz standard HTML form integration
        const paymentUrl = isTest
            ? 'https://testpay.easebuzz.in/payment/initiateLink'
            : 'https://pay.easebuzz.in/payment/initiateLink';

        return res.json({
            success: true,
            fallback: true,
            key: EASEBUZZ_KEY,
            txnid,
            amount,
            productinfo,
            firstname,
            email,
            phone,
            surl,
            furl,
            hash,
            paymentUrl
        });

    } catch (error) {
        console.error('Payment initiate error:', error);
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
        const reverseHashStr = `${EASEBUZZ_SALT}|${udf10 || ''}|${udf9 || ''}|${udf8 || ''}|${udf7 || ''}|${udf6 || ''}|${udf5 || ''}|${udf4 || ''}|${udf3 || ''}|${udf2 || ''}|${udf1 || ''}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${EASEBUZZ_KEY}`;
        const expectedHash = sha512(reverseHashStr);
        const hashValid = (hash === expectedHash);

        if (!hashValid) {
            console.warn('Hash mismatch for txnid:', txnid);
        }

        const paymentStatus = (status === 'success' && hashValid) ? 'completed' : 'failed';

        const inquiry = await Inquiry.findByIdAndUpdate(
            txnid,
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
