const mongoose = require('mongoose');
const dotenv = require('dotenv');
const SiteSetting = require('./models/SiteSetting');

dotenv.config();

const setDate = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/real_estate');
        console.log('MongoDB Connected for Setting Date');

        await SiteSetting.findOneAndUpdate(
            { key: 'result_date' },
            { key: 'result_date', value: '29 March 2026' },
            { upsert: true, new: true }
        );

        console.log('Result date set to 29 March 2026 successfully in backend.');
        process.exit(0);
    } catch (error) {
        console.error('Error setting date:', error);
        process.exit(1);
    }
};

setDate();
