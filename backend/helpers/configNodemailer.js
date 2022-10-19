const nodemailer = require('nodemailer');
const { EMAIL, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    post: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS
    },
});

module.exports = {transporter};