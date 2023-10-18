const { Training } = require('../models');
const multer = require('multer');

exports.createTraining = async (req, res) => {
    try {
        if (req.file instanceof multer.MulterError) {
          console.error('Resim yüklenirken Multer kaynaklı hata oluştu');
          return res.status(400).send('Resim yüklenirken hata oluştu');
        } else if (!req.file) {
          console.error('Resim yüklenemedi veya eksik');
          return res.status(400).send('Lütfen bir resim yükleyin');
        }
    
        const imageFileName = '/uploads/' + req.file.filename;
    
        const training = await Training.create({
          ...req.body,
          trainer_id: req.session.userID,
          image: imageFileName,
        });
    
        return res.status(201).redirect('/users/dashboard');
      } catch (error) {
        console.error(error);
        return res.status(500).send('Bir hata oluştu');
      }
}