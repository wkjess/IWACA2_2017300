var http = require("http"),
axios = require("axios"),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

//Middleware
app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

app.get('/music/:foo/:bar', (req, res) => {
    res.json({message: 'hi', data: [
        req.params.foo,
        req.params.bar
    ]})
});

app.post('/music', (req, res) => {
    res.json({result: 'Post sent', data: req.body});
});

let users = [];
(async function getNames() {
try {
const { data } = await axios.get(
"https://jsonplaceholder.typicode.com/users"
);
users = data.map(user => user.name);
} catch (error) {
console.log(error);
}
})();

app.listen(port, function(err) {
    console.log('Server listening to port: ' + port);
});