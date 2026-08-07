const nodemailer = require('nodemailer');

const createTransporter = () => {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('WARNING: SMTP_USER or SMTP_PASS is missing in .env');
    }

    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: (process.env.SMTP_PASS || '').replace(/\s+/g, '') // Remove spaces from App Password
        }
    });
};

// ─── 1. Initial Form Submission Email (sent to admin when form is submitted) ──
const sendConfirmationEmail = async (userEmail, userName, fatherName, address, phone, aadhaar, city, state, pinCode, quota, plotSize) => {
    try {
        const transporter = createTransporter();
        const recipient = process.env.ADMIN_EMAIL || 'kunaldoos15@gmail.com';
        console.log("Sending admin notification email to:", recipient);

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Form Enquiry from ${userName} - Haryana Deen Dayal Jan Awaas Yojna`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h3>You have a new enquiry</h3>
                    <p>Details of the customer who just submitted the form:</p>
                    <ul style="list-style-type: none; padding-left: 0; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <li><strong>Applicant Name:</strong> ${userName}</li>
                        <li><strong>Father's Name:</strong> ${fatherName || 'N/A'}</li>
                        <li><strong>Applicant Email:</strong> ${userEmail}</li>
                        <li><strong>Phone Number:</strong> ${phone || 'N/A'}</li>
                        <li><strong>City:</strong> ${city || 'N/A'}</li>
                        <li><strong>State:</strong> ${state || 'N/A'}</li>
                        <li><strong>Pin Code:</strong> ${pinCode || 'N/A'}</li>
                        <li><strong>Full Address:</strong> ${address || 'N/A'}</li>
                        <li><strong>Aadhaar Number:</strong> ${aadhaar || 'N/A'}</li>
                        <li><strong>Quota:</strong> ${quota || 'GEN'}</li>
                        <li><strong>Plot Size:</strong> ${plotSize || 'N/A'}</li>
                        <li style="color: #e63946; font-weight: bold; margin-top: 10px;"><strong>Payment Status:</strong> Pending</li>
                    </ul>
                    <br />
                    <p>Best Regards,</p>
                    <p><strong>Haryana Deen Dayal Jan Awaas Yojna Registration System</strong></p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Admin confirmation email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending confirmation email to admin:', error);
    }
};

// ─── 2. Payment Status Email (sent to admin + user after Easebuzz callback) ───
const sendPaymentStatusEmail = async (userEmail, userName, fatherName, address, phone, aadhaar, city, state, pinCode, quota, plotSize, paymentStatus, transactionId) => {
    try {
        const transporter = createTransporter();
        const isSuccess = paymentStatus === 'completed';
        const statusLabel = isSuccess ? 'Payment Successful ✅' : 'Payment Failed ❌';

        const recipient = process.env.ADMIN_EMAIL || 'kunaldoos15@gmail.com';
        // Admin email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: recipient,
            subject: `Payment ${isSuccess ? 'Received' : 'Failed'} — ${userName} - Haryana Deen Dayal Jan Awaas Yojna`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h3>${statusLabel}</h3>
                    <p>Payment update for the following customer:</p>
                    <ul style="list-style-type: none; padding-left: 0; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <li><strong>Applicant Name:</strong> ${userName}</li>
                        <li><strong>Father's Name:</strong> ${fatherName || 'N/A'}</li>
                        <li><strong>Applicant Email:</strong> ${userEmail}</li>
                        <li><strong>Phone Number:</strong> ${phone || 'N/A'}</li>
                        <li><strong>City:</strong> ${city || 'N/A'}</li>
                        <li><strong>State:</strong> ${state || 'N/A'}</li>
                        <li><strong>Pin Code:</strong> ${pinCode || 'N/A'}</li>
                        <li><strong>Full Address:</strong> ${address || 'N/A'}</li>
                        <li><strong>Aadhaar Number:</strong> ${aadhaar || 'N/A'}</li>
                        <li><strong>Quota:</strong> ${quota || 'GEN'}</li>
                        <li><strong>Plot Size:</strong> ${plotSize || 'N/A'}</li>
                        <li><strong>Amount:</strong> ₹21,000</li>
                        <li><strong>Transaction ID:</strong> ${transactionId || 'N/A'}</li>
                        <li style="color: ${isSuccess ? '#16a34a' : '#e63946'}; font-weight: bold; margin-top: 10px;">
                            <strong>Payment Status:</strong> ${isSuccess ? 'Completed' : 'Failed'}
                        </li>
                    </ul>
                    <br />
                    <p>Best Regards,</p>
                    <p><strong>Haryana Deen Dayal Jan Awaas Yojna Registration System</strong></p>
                </div>
            `
        });

        // User email — only on successful payment
        if (isSuccess && userEmail) {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: userEmail,
                subject: `Registration Confirmed — Haryana Deen Dayal Jan Awaas Yojna`,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333;">
                        <h3>Registration Successful ✅</h3>
                        <p>Dear <strong>${userName}</strong>,</p>
                        <p>Your payment of <strong>₹21,000</strong> has been received and your registration is confirmed under Haryana Deen Dayal Jan Awaas Yojna.</p>
                        <ul style="list-style-type: none; padding-left: 0; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                            <li><strong>Applicant Name:</strong> ${userName}</li>
                            <li><strong>Father's Name:</strong> ${fatherName || 'N/A'}</li>
                            <li><strong>Phone Number:</strong> ${phone || 'N/A'}</li>
                            <li><strong>Quota:</strong> ${quota || 'N/A'}</li>
                            <li><strong>Plot Size:</strong> ${plotSize || 'N/A'}</li>
                            <li><strong>Amount Paid:</strong> ₹21,000</li>
                            <li><strong>Transaction ID:</strong> ${transactionId || 'N/A'}</li>
                            <li style="color: #16a34a; font-weight: bold; margin-top: 10px;"><strong>Payment Status:</strong> Completed</li>
                        </ul>
                        <p style="margin-top: 15px;">Results will be declared on <strong>30 March 2026</strong>. Please visit the Check Status page to see your allotment result.</p>
                        <br />
                        <p>Best Regards,</p>
                        <p><strong>Haryana Deen Dayal Jan Awaas Yojna Registration System</strong></p>
                    </div>
                `
            });
        }

        console.log(`Payment status emails sent for ${userName} — Status: ${paymentStatus}`);
    } catch (error) {
        console.error('Error sending payment status email:', error);
    }
};

// ─── 3. General Enquiry Email ─────────────────────────────────────────────────
const sendGeneralEnquiryEmail = async (name, phone, message) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL || 'kunaldoos15@gmail.com',
            subject: `New Enquire Now Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h3>New General Enquiry</h3>
                    <p>Details from the "Enquire Now" form:</p>
                    <ul style="list-style-type: none; padding-left: 0; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Phone:</strong> ${phone}</li>
                        <li><strong>Message:</strong> ${message}</li>
                    </ul>
                    <br />
                    <p>Best Regards,</p>
                    <p><strong>Haryana Deen Dayal Jan Awaas Yojna System</strong></p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('General enquiry email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending general enquiry email:', error);
    }
};

module.exports = { sendConfirmationEmail, sendPaymentStatusEmail, sendGeneralEnquiryEmail };
