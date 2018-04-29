var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var tediousExpress = require('express4-tedious');
var Connection = require('tedious').Connection;
var conn = {
    "server": "localhost",
    "database": "donezilla",
    "userName": "sa",
    "password": "zxcvbnmSQL124*",
    "options": {
        "database": "donezilla",
    }
}

var app = express();
app.use(function (req, res, next) {
    req.sql = tediousExpress(conn);
    next();
});

app.use(bodyParser.text());
app.use('/project', require('./routes/project'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found: ' + req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;