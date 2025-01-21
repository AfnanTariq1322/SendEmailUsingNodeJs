// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');

// Initialize the Express app
const app = express();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "afnantariq715@gmail.com", // Your email address
        pass: " ", // Your email app password
    },
});

// Endpoint to send an email when visiting /send-email
app.get('/send-email', async (requestAnimationFrame, res) => {
    try {
        // Send email
        const info = await transporter.sendMail({
            from: '"Unity Coding" <afnantariq715@gmail.com>', // Sender address
            to: "29220@students.riphah.edu.pk", // Recipient email
            subject: "Hello from Node.js", // Subject line
            text: "This is a test email sent from Node.js!", // Plain text body
        });

        console.log(`Message sent: ${info.messageId}`);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        res.status(500).send('Failed to send email.');
    }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 