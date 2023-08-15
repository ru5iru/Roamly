import { createTransport } from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'roamlyapp@gmail.com',
        pass: 'wignllehaykhiwma',
      },
       secure: true, // Use a secure TLS connection
    });

    const mailOptions = {
      from: 'roamlyapp@gmail.com',
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;