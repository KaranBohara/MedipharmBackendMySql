require("dotenv").config();
const nodemailer = require("nodemailer");
var herokuurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/user/activate/';
var localurl='http://localhost:5000/api/v1/user/activate/'
const sendEmail=async(name,email,id,code) =>{
  try {
    const smtpEndpoint = "smtp.sendgrid.net";

    const port = 465;

    const senderAddress = "karanrockbohara@gmail.com";

    var toAddress = email;

    const smtpUsername = "apikey";

    const smtpPassword = process.env.SG_APIKEY;

    var subject = "Please confirm your account";

    // The body of the email for recipients
    var body_html = `<h1>Account Verification</h1>
    <h2>Hello ${name}</h2>
    <p>Thank you for registration. Please confirm your email by clicking on the following link</p>
    <a target="_" href=${herokuurl}${id}/${code}> Click here</a>
    <p>Good Day!</p>
    <p>Regards</p>
    <p>Medpiharm Team</p>
    </div>`;

    // Create the SMTP transport.
    let transporter = nodemailer.createTransport({
      host: smtpEndpoint,
      port: port,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
    });

    // Specify the fields in the email.
    let mailOptions = {
      from: senderAddress,
      to: toAddress,
      subject: subject,
      html: body_html,
    };

    let info = await transporter.sendMail(mailOptions);
    return { error: false };
  } catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}

module.exports = { sendEmail };