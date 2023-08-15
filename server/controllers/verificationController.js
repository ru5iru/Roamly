import jwt from "jsonwebtoken";
import { query } from "../config/db.js";
import sendEmail from "../utils/sendEmail.js";

export const sendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const resetToken = jwt.sign({ email: email }, "secretkey", {
      expiresIn: "1h",
    });
    const verificationLink = `http://localhost:3000/verify/${resetToken}`;

    sendEmail(email, "Verify your email", verificationLink);
    return res
      .status(200)
      .json({
        message: "User Created and Verification Email sent successfully.",
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export const verifyEmail = async (req, res) => {
  const verify = jwt.verify;
  const { token } = req.params;

  const decoded = verify(token, "secretkey");
  const userEmail = decoded.email;

  console.log(userEmail);

  const q1 = "SELECT * FROM users WHERE email = $1";

  const result = await query(q1, [userEmail]);

  if (result.rowCount === 0) {
    return res.status(404).json("User not found!");
  } else {
    const verified = true;
    const q2 =
      "UPDATE users SET isverified = true WHERE email = $1 RETURNING *";

    const result2 = await query(q2, [userEmail]);

    if (result2.rows[0].user_id) {
      return res.status(200).json({ message: "Email verified successfully." });
    }
  }

  // query(q1, [userEmail], (err, data) => {
  //   console.log("second")
  //   if (err) return res.status(500).json(err);
  //   if (data.rows.length === 0) return res.status(404).json("User not found!");

  //   data.rows[0].isVerified = true;
  //   console.log(data.rows[0])

  //   const q2 = 'UPDATE users SET "isverified" = $1 WHERE email = $2';

  //   query(q2, [data.rows[0].isVerified, userEmail], (err, data) => {
  //     if (err) return res.status(500).json({ error: 'Internal server error.' });
  //     return res.status(200).json({ message: 'Email verified successfully.' });
  //   });

  // });
};

// now make a condition in login to check if the user is verified or not
// add a database column isVerified to the user table and make its value default false
