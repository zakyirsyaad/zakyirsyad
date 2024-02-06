// pages/api/sendEmail.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            // You can add validation logic here if needed

            // Send email using SendGrid
            await sgMail.send({
                to: 'zkyxentertain@gmail.com',
                from: email,
                subject: `Message from ${name} `,
                text: message,
            });

            res.status(200).json({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
