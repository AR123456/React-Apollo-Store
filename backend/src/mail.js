//node mail to send mail via node js
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});
//TODO for future dev or prd look at mjml.io for email templateing with react this is a simple home make one

const makeANiceEmail = text => `
<div className="email" style="
border: 1px solid black;
padding: 20px;
font-family: sans-serif;
line-height: 2;
font-size: 20px:
">
<h2>Hello There !</h2>
<p> ${text}</p>

</div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
