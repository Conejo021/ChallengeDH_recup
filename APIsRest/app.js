const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const methodOverride = require('method-override');
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cancionesRoutes = require('./routes/cancionesRoutes');
const generosRoutes = require('./routes/generosRoutes');
//Rutas de APIs
const generosApiRouter = require('./routes/api/generosApiRouter');
const cancionesApiRouter = require('./routes/api/cancionesApiRouter');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cancionesRoutes',cancionesRoutes);
app.use('/generosRoutes',generosRoutes);
//Para APIs
app.use('/api/generos', generosApiRouter);
app.use('/api/canciones', cancionesApiRouter);

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
