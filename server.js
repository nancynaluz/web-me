const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
app = express()
app.use(serveStatic(__dirname + "/dist"))
var port = process.env.PORT || 80
app.listen(port)
console.log(`server started ${port}`)

