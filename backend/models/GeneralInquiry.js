const mongoose = require('mongoose');

const generalInquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const GeneralInquiry = mongoose.model('GeneralInquiry', generalInquirySchema);

module.exports = GeneralInquiry;
