var express = require('express');
var socket_io = require( "socket.io" );
var path = require('path');
var favicon = require('serve-favicon');
//var controllers = require('./controllers');
//var middleware = require('./middleware');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Express
var app          = express();

// Socket.io
var io           = socket_io();
app.io           = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: false });		//Disabling default layout
require('./view_partials')(app);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);
require('./websocket')(io);
require('./errors')(app);

module.exports = app;
