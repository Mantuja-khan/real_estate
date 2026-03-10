const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    address: { type: String, required: true },
    panCard: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    area: { type: String, required: true },
    aadhaar: { type: String, required: true },
    payment_status: { type: String, default: 'pending' },
    slot_status: { type: String, default: 'pending' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create text indexes/regular indexes if needed for search
inquirySchema.index({ aadhaar: 1 });

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
