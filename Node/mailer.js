const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "shreyashpatil.pacharde@gmail.com",
        pass: "bbqulvdpaqmqobmn"
    }
});

module.exports = transporter;