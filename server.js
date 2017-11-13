var express = require('express');
var app = express();
var bodyParser = require('body-parser');//include_module
var users  = require('./users.js');//usefile
/*function home(request, response){
    //response.send('Hello, Express.js');
}*/

//Routing
/*
function hello(request,response,next){
    response.write('Hello\n');
    next();
}

function now(req, res, next){
var now = new Date();
console.log(now);
res.write(now + '\n');
next();

}

function goodbye(req,res){
res.write('Goodbye\n');
res.end();
}
*/

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

/*app.get('/api/users', function (req, res) {
    var user_id = req.query.id;
    var user_name = req.query.name;
    res.send('\id:' + user_id + '\n name:' + user_name);
});

app.get('/api/users/:id', function (req, res) {
    var user_id = req.params.id;
    res.send('id : ' + req.params.id);
});*/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static('www'))
app.get('/users',users.findAll);
app.get('/users/role/:role',users.searchByRole);
app.get('/users/search',users.searchByFname);
app.get('/users/search/lname',users.searchByLname);

/*app.get('/hello', hello, now, goodbye);

app.get('/', function (request, response) {

    response.send('Hello, Express.js');

});

app.get('/now', function (request, response) {
    var now = new Date();
    response.send("Now: " + now);

});

app.get('/json', function (request, response) {
    var user = { id: 111, name: "User" };
    response.json(user);

});*/



app.listen(3000);
console.log('Server is running at http://localhost:3000');