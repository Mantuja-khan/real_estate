const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Inquiry = require('../models/Inquiry');
const { sendConfirmationEmail } = require('../utils/mailer');

const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_fallback',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'secret_fallback',
});

// @route   POST /api/payments/create-order
// @desc    Create Razorpay Order
// @access  Public
router.post('/create-order', async (req, res) => {
    try {
        const { amount, inquiryId, name, email } = req.body;
        
        const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: 'INR',
            receipt: `receipt_order_${inquiryId}`,
        };
        
        const order = await razorpay.orders.create(options);
        
        if (!order) return res.status(500).send('Some error occurred');
        
        res.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_fallback',
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
});

// @route   POST /api/payments/verify
// @desc    Verify Razorpay Payment
// @access  Public
router.post('/verify', async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            inquiryId,
            email,
            name,
            amount
        } = req.body;
        
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'secret_fallback')
            .update(sign)
            .digest('hex');
            
        if (razorpay_signature === expectedSign) {
            // Update inquiry payment status
            const inquiry = await Inquiry.findByIdAndUpdate(inquiryId, { payment_status: 'completed' }, { new: true });
            
            if (inquiry) {
                // Send confirmation email to Admin
                await sendConfirmationEmail(
                    inquiry.email, 
                    inquiry.name, 
                    inquiry.fatherName, 
                    inquiry.address, 
                    inquiry.phone, 
                    inquiry.aadhaar, 
                    inquiry.city, 
                    inquiry.state, 
                    inquiry.pinCode, 
                    inquiry.quota, 
                    inquiry.plotSize
                );
            }
            
            return res.json({ message: 'Payment verified successfully' });
        } else {
            return res.status(400).json({ message: 'Invalid signature sent!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to verify payment', error: error.message });
    }
});

module.exports = router;
