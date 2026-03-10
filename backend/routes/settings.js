const express = require('express');
const SiteSetting = require('../models/SiteSetting');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   GET /api/settings
// @desc    Get all active settings
// @access  Public
router.get('/', async (req, res) => {
    try {
        const keys = req.query.keys ? req.query.keys.split(',') : [];
        let query = {};
        if (keys.length > 0) {
            query.key = { $in: keys };
        }
        
        const settings = await SiteSetting.find(query).select('key value -_id');
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   PATCH /api/settings
// @desc    Update a setting
// @access  Private
router.patch('/', protect, async (req, res) => {
    try {
        const { key, value } = req.body;
        
        const setting = await SiteSetting.findOneAndUpdate(
            { key },
            { key, value },
            { new: true, upsert: true }
        );
        
        res.json(setting);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
