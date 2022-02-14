// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')
// app = express()
// app.use(serveStatic(__dirname + "/dist"))
// var port = process.env.PORT || 8080
// app.listen(port)
// console.log(`server started ${port}`)

var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});