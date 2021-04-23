//CRUD functionalities

exports.getMusic = function(req, res) {
    res.json({result: 'Hi from Music-controller'});
};

exports.postMusic = function(req, res) {
    res.json({result: 'Post sent', data: req.body});
};