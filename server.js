var express = require('express');
var app = express();
var maxAge = 31557600000;
var vacation_requests = require('./specs/info.json');


app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


app.get('/vacation_requests', function(req, res) {
    res.send(200, vacation_requests);
});


app.post('/sigin', function(req, res) {
    var user = req.body;

    if (user.username === "admin" && user.password === "admin") {
        res.send(200, {
            message: "User signed correctly"
        });
    } else {
        res.send(500, {
            message: "Please verify your credentials."
        });
    }

});

app.get('/*', function(req, res) {
    res.sendfile(__dirname + '/app/views/index.html');
});


app.listen(3000);

console.log('Listening on port 3000');
