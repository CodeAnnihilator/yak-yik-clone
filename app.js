var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise

var dbUrl = 'mongodb://mongo:27017'

mongoose.connect(dbUrl, { useMongoClient: true })
  .then(() => console.log('DB Connection Success: ' + dbUrl))
  .catch(err => console.log('DB Connection Failed: ' + err))

var index = require('./routes/index')
var users = require('./routes/users')
var api = require('./routes/api')

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/users', users)
app.use('/api', api)

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
