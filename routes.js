const express = require('express'),
router = express.Router(),
cors = require('cors');

var music = require ('../music-controller');

router.all('*', cors())

//CRUD function
router.post('/createMusic', music.createMusic); //create music

module.exports = router;