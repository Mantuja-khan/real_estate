const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    aadhaar: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
    quota: { type: String, required: true },
    plotSize: { type: String, required: true },
    payment_status: { type: String, default: 'pending' },  // pending | completed | failed
    slot_status: { type: String, default: 'pending' },
    easepayid: { type: String, default: '' },  // Easebuzz transaction reference
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create text indexes/regular indexes if needed for search
inquirySchema.index({ aadhaar: 1 });

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
