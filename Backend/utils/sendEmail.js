const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    // 1. Transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,           // STARTTLS ke liye
      secure: false,       // false for STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3", // TLS issue fix ke liye
      },
    });

    // 2. Mail options
    const mailOptions = {
      from: `"Tushar Pal" <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    // 3. Send mail
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to", options.email);

  } catch (error) {
    console.error("❌ Email not sent:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
