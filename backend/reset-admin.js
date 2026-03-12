const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');

dotenv.config();

const resetAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected for Password Reset');

        const email = 'nkvemeraldavenue76@gmail.com';
        const password = 'emeraldavenue@789';

        const admin = await Admin.findOne({ email });

        if (!admin) {
            console.log('Admin user not found. Creating new one...');
            await Admin.create({ email, password });
            console.log('Admin created successfully.');
        } else {
            console.log('Admin found. Updating password...');
            admin.password = password;
            await admin.save();
            console.log('Password updated successfully.');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

resetAdmin();
