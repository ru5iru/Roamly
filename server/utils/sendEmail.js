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

const sendResetEmail = async (email, resetLink) => {
  try {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'roamlyapp@gmail.com',
        pass: 'wignllehaykhiwma',
      },
    });

    const mailOptions = {
      from: 'roamlyapp@gmail.com',
      to: email,
      subject: "Password Rest",
      text: `Click the following link to reset your password: ${resetLink}`,
      html: `<p>Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a></p>`,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Reset link sent to ${email}`);

  } catch (error) {
    console.error(`Failed to send reset link to ${email}:`, error);
    throw error;
  }
}

export  {sendEmail, sendResetEmail};
// export default sendResetEmail;