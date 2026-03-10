const mongoose = require('mongoose');

const siteSettingSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true }
}, { timestamps: true });

const SiteSetting = mongoose.model('SiteSetting', siteSettingSchema);

module.exports = SiteSetting;
