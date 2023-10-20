const { User, Training } = require('../models');
const nodemailer = require('nodemailer');

exports.getHomePage = (req, res) => {
    res.render('index', {
        page_name: 'home'
    });
};

exports.getAboutPage = (req, res) => {
    res.render('about', {
        page_name: 'about'
    });
};

exports.getTrainerPage = async (req, res) => {
    const trainers = await User.findAll({where: {title: 'trainer'}});
    const trainings = await Training.findAll();
    res.render('trainer', {
        page_name: 'trainer',
        trainers,
        trainings
    });
}

exports.getGalleryPage = (req, res) => {
    res.render('gallery', {
        page_name: 'gallery'
    });
}

exports.getContacPage = (req, res) => {
    res.render('contact', {
        page_name: 'contact'
    });
};

exports.getLoginPage = (req, res) => {
    res.render('login', {
        page_name: 'login'
    });
};

exports.getRegisterPage = (req, res) => {
    res.render('register', {
        page_name: 'register'
    });
};

exports.sendMail = (req, res) => {
    console.log(req.body);
    const outputMessage = `
    <h1>Message Details</h1>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone number: ${req.body.phonenumber}</li>
        <li>Subject: ${req.body.subject}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
    `

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hasanocal7@gmail.com",
          pass: "uwdfkcjfjvabygqr",
        }
      });
      
      async function main() {
        const info = await transporter.sendMail({
          from: '"MisFit" <hasanocal7@gmail.com>',
          to: "hasanocaltest@gmail.com",
          subject: "Message from the MisFit Contact Form",
          html: outputMessage,
        });
      
        console.log("Message sent: %s", info.messageId);
      }
      
      main().catch(console.error);
      res.status(201).redirect('/');
}