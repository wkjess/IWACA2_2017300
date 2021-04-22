var http = require("http"),
axios = require("axios"),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json());

app.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: 'hi', data: [
        req.params.foo,
        req.params.bar
    ]})
});

app.post('/hello', (req, res) => {
    res.json({result: 'Post sent', data: req.body});
})

//create a server object:
//http.createServer(function(req, res) {
//res.write(users.join("\n")); //display the list of users on the page
//res.end(); //end the response
//})
//.listen(8080); //the server object listens on port 8080

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