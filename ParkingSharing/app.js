var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var { API_ROUTERS_PATHS } = require("./constants/apiUrl");
var account = require('./routes/index');
var location = require('./routes/location');
var freeDate = require('./routes/free-days');
var place = require('./routes/place');
var admin = require('./routes/admin');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept, Authorization');
    next();
});


app.use(API_ROUTERS_PATHS.ACCOUNT, account);
app.use(API_ROUTERS_PATHS.LOCATION, location);
app.use(API_ROUTERS_PATHS.PLACE, place);
app.use(API_ROUTERS_PATHS.ADMIN, admin);
app.use(API_ROUTERS_PATHS.FREE_DATE, freeDate);

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
  res.sendStatus(err.status || 500);
});

module.exports = app;
