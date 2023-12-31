import jwt from "jsonwebtoken";
import { query } from "../config/db.js";
import {sendEmail} from "../utils/sendEmail.js";

export const sendVerificationEmail = async (req, res) => {
  const { email } = req.body;
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
};
