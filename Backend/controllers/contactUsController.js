import ContactUs from "../models/ContactUsModel.js";
import nodemailer from "nodemailer";

const sendContactUsMail = async (email, name, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    service: "gmail",
    auth: {
      user: "abrehman.bscs22seecs@seecs.edu.pk",
      pass: "STUDEnt@1235",
    },
  });

  const mailOptions = {
    from: "abrehman.bscs22seecs@seecs.edu.pk",
    to: email,
    subject: "USER MESSAGE",
    text: `Someone has contacted you through the contact us form. Here are the details:`,
    html: ` <p><strong>Name:</strong>${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>`,
  };

  return await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return false;
    } else {
      console.log("Email sent:", info.response);
      return true;
    }
  });
};
const addContactUs = async (req, res) => {
  const { email, name, message } = req.body;
  if (!email || !name || !message) {
    return res.status(400).json({ message: "incomplete content" });
  } else {
    try {
      const new_contact_us = await ContactUs.create({
        email: email,
        name: name,
        message: message
      });
      await sendContactUsMail(email, name, message);
      return res.status(200).json({ message: "contact us created,email sent", new_contact_us });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
export default { addContactUs };