nodeMailer = require('nodemailer');

require('dotenv').config()

const confirmation = async (req, res) => {
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
		to: "Ian.Hinden@Gmail.com",//req.email,
		subject: "Get Me In Dune 2 - Please Confirm Your E-mail Address",
		html: "Hello! I am Ian, the creator of this site! I manually sent you this confirmation e-mail! Just kidding, it's automated. Please click this:" + process.env.BASE_URL + req.token
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