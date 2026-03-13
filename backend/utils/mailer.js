const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (userEmail, userName, fatherName, address, phone, aadhaar, city, state, pinCode, quota, plotSize, paymentInfo = '') => {
    try {
        // You should configure this with your actual SMTP credentials (e.g., Gmail, SendGrid)
        // For Gmail, you would use an App Password if 2FA is enabled.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER || '"Haryana Deen Dayal Jan Awaas Yojna Admin" <no-reply@haryanaawaas.com>',
            to: process.env.ADMIN_EMAIL || 'vlogwithdialogue@gmail.com', // Send specifically to the ADMIN
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
                        ${paymentInfo ? `<li style="color: #e63946; font-weight: bold; margin-top: 10px;"><strong>Payment Info:</strong> ${paymentInfo}</li>` : ''}
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

module.exports = { sendConfirmationEmail };
