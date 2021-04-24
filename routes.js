const express = require('express'),
router = express.Router();

const Music = require('../models/music');

//router.all('*', cors())

//CRUD function
router.get('/music', musicCtrl.getMusic); // Get all music from DB
router.post('/music', musicCtrl.postMusic); // Create music


module.exports = router;