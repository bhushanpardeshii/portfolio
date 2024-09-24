import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstname, lastname, email, phone, message } = await req.json();

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use other services like Yahoo, Outlook, etc.
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
        },
    });

    // Set up email data
    const mailOptions = {
        from: `"${firstname} ${lastname}" <${email}>`, // Sender address
        to: process.env.EMAIL_RECEIVER, // Your receiving email address
        subject: 'New Contact Form Submission', // Subject line
        text: `You have received a new message:\n\nName: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // Plain text body
    };

    try {
        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
    }
}
