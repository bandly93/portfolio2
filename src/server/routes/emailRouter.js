const express = require('express');
const emailRouter = express.Router();
const nodeMailer = require('nodemailer');
const config = require('../../../config.json');

emailRouter.route('/')
.post((req,res) => {
	const { name,email,phone,message } = req.body;
	const { USER,PASSWORD } = config;
	let transporter = nodeMailer.createTransport({
		service:'Gmail',
		auth:{user:USER,pass:PASSWORD}
	})

	let mailOptions = {
		from : name,
		to : USER,
		subject : 'Phone : ' + phone + "  " + 'Email : ' +email,
		text : message,
	}

	let sendEmail = transporter.sendMail(mailOptions,(err,info)=>{
		if(err){
			res.json({'status':err});
		}else{
			res.json({'status':'success'});
		}
	});
})

module.exports = emailRouter;
