const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/real_estate');
        console.log('MongoDB Connected for Seeding');

        const email = 'kunaldoos15@gmail.com';
        const password = 'nkvemeraldavanue@789';
        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            console.log('Admin user already exists!');
            process.exit(0);
        }

        const admin = await Admin.create({
            email,
            password,
        });

        console.log('Admin user seeded successfully:', admin.email);
        process.exit(0);
    } catch (error) {
        console.error('Error seeding admin user:', error);
        process.exit(1);
    }
};

seedAdmin();
