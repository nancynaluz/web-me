const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
app = express()
app.use(serveStatic(__dirname))
var port = process.env.PORT || 8080
app.listen(port)
console.log(`server started ${port}`)