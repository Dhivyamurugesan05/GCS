const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-reset-email", async (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `http://localhost:5173/reset-password?email=${email}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset - GCS",
      html: `
        <h2>Password Reset Request</h2>
        <p>Click below to reset your password:</p>
        <a href="${resetLink}" style="padding:10px 20px;background:#667eea;color:white;text-decoration:none;border-radius:5px;">
          Reset Password
        </a>
      `,
    });

    res.json({ message: "Reset email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
