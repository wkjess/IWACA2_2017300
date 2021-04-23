const express = require('express'),
router = express.Router();

var musicCtrl = require('./music-controller');

//router.all('*', cors())

//CRUD function
router.get('/music', musicCtrl.getMusic); // Get all music from DB
router.post('/music', musicCtrl.postMusic); // Create music


module.exports = router;