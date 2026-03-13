require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log('Testing SMTP connection...');
    const rawPass = process.env.SMTP_PASS || '';
    const trimmedPass = rawPass.trim();
    console.log('User:', process.env.SMTP_USER);
    console.log('Raw Pass length:', rawPass.length);
    console.log('Trimmed Pass length:', trimmedPass.length);
    console.log('Hex pass (trimmed):', Buffer.from(trimmedPass).toString('hex'));

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        logger: true,
        debug: true,
        auth: {
            user: (process.env.SMTP_USER || '').trim(),
            pass: (process.env.SMTP_PASS || '').trim()
        }
    });

    try {
        await transporter.verify();
        console.log('SMTP connection verified successfully!');

        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
            subject: 'SMTP Test Email',
            text: 'If you are reading this, your email configuration is working!'
        });
        console.log('Test email sent:', info.messageId);
    } catch (error) {
        console.error('SMTP Error:', error);
    }
}

testEmail();
