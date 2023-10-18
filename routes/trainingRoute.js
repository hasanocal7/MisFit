const router = require('express').Router();
const trainingController = require('../controller/trainingController');

router.post('/', trainingController.createTraining);

module.exports = router;