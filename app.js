var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var favicon = require('serve-favicon');

 //compress the HTTP response sent back to a client,
 //significantly reducing the time taken to for the
 //client to get and load the page.
var compression = require('compression');

//Helmet to protect against well known vulnerabilities
//sets appropriate HTTP headers
var helmet = require('helmet');

var indexRouters = require('./routes/index');
var usersRouters = require('./routes/users');
var catalogRouters = require('./routes/catalog');
//Create the Express application object
var app = express();

//setting up mongoose connection -- the same every time except url changes for each database used
var mongoose = require('mongoose');
var mongoDB = 'mongodb://celismb:@ds125060.mlab.com:25060/local_library';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(compression()); // compress all routes
//For high traffic compression use a reverse proxy like Nginx
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouters);
app.use('/users', usersRouters);
app.use('/catalog', catalogRouters);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
