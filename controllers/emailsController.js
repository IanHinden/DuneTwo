nodeMailer = require('nodemailer');

require('dotenv').config()

const confirmation = (req, res) => {
    let transporter = nodeMailer.createTransport({
		host: 'mail.privateemail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.NAME_CHEAP_EMAIL,
			pass: process.env.NAME_CHEAP_PASSWORD
		}
	});
	let mailOptions = {
		from: 'ian@getmeindunetwo.com',
		to: "Ian.Hinden@gmail.com",
		subject: "Please Confirm Your E-mail Address",
		html: req.message,
	};

  	transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.redirect('/');
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
          res.redirect('/');
    });
}

module.exports = { confirmation }