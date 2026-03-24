const express = require('express');
const Inquiry = require('../models/Inquiry');
const GeneralInquiry = require('../models/GeneralInquiry');
const { protect } = require('../middleware/authMiddleware');
const { sendConfirmationEmail, sendGeneralEnquiryEmail } = require('../utils/mailer');

const router = express.Router();

// @route   POST /api/inquiries/enquire
// @desc    Create a new general enquiry
// @access  Public
router.post('/enquire', async (req, res) => {
    try {
        const { name, phone, message } = req.body;
        
        const enquiry = await GeneralInquiry.create({ name, phone, message });
        
        // Send email to admin
        await sendGeneralEnquiryEmail(name, phone, message);
        
        res.status(201).json(enquiry);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create enquiry', error: error.message });
    }
});

// @route   POST /api/inquiries
// @desc    Create a new inquiry
// @access  Public
router.post('/', async (req, res) => {
    // Deadline: 29 March 2026 23:59:59 IST (UTC+5:30 = 18:29:59 UTC)
    const deadline = new Date('2026-03-29T18:29:59Z');
    if (new Date() > deadline) {
        return res.status(403).json({
            message: 'Registration is closed. The deadline was 29 March 2026 at 11:59 PM IST. Results will be declared on 30 March 2026.'
        });
    }

    try {
        const { name, fatherName, address, phone, email, area, aadhaar, city, state, pinCode, quota, plotSize } = req.body;
        
        const inquiry = await Inquiry.create({
            name, fatherName, address, phone, email, area, aadhaar, city, state, pinCode, quota, plotSize,
            payment_status: 'pending'
        });
        
        // Send email to admin
        await sendConfirmationEmail(email, name, fatherName, address, phone, aadhaar, city, state, pinCode, quota, plotSize);
        
        res.status(201).json(inquiry);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create inquiry', error: error.message });
    }
});

// @route   GET /api/inquiries
// @desc    Get all inquiries
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const inquiries = await Inquiry.find({}).sort({ created_at: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   GET /api/inquiries/check/:aadhaar
// @desc    Check status of an inquiry by Aadhaar
// @access  Public
router.get('/check/:aadhaar', async (req, res) => {
    try {
        const cleanedAadhaar = req.params.aadhaar.trim();
        const inquiries = await Inquiry.find({ aadhaar: cleanedAadhaar })
                                     .sort({ created_at: -1 })
                                     .limit(1)
                                     .select('name area payment_status slot_status created_at');
        
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   PATCH /api/inquiries/:id/payment
// @desc    Update payment status
// @access  Public (for Razorpay webhook) or Private
router.patch('/:id/payment', async (req, res) => {
    try {
        const { status } = req.body;
        const inquiry = await Inquiry.findById(req.params.id);
        
        if (inquiry) {
            inquiry.payment_status = status;
            await inquiry.save();
            res.json(inquiry);
        } else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   PATCH /api/inquiries/update-batch
// @desc    Update slot status for multiple inquiries
// @access  Private
router.patch('/update-batch', protect, async (req, res) => {
    try {
        const { ids, slot_status } = req.body;
        
        await Inquiry.updateMany(
            { _id: { $in: ids } },
            { $set: { slot_status } }
        );
        
        res.json({ message: 'Slot status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   DELETE /api/inquiries/:id
// @desc    Delete an inquiry
// @access  Private
router.delete('/:id', protect, async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);
        if (inquiry) {
            await inquiry.deleteOne();
            res.json({ message: 'Inquiry removed' });
        } else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
