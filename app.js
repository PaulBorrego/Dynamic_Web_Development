var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require("./routes/home.js");
var recipeDisplayRouter = require("./routes/recipeDisplay.js");
var recipeListRouter = require("./routes/recipeList.js");

var app = express();

//app.set('views','views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/recipeDisplay', recipeDisplayRouter);
app.use('/recipeList', recipeListRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(3000, () => {
    console.log(`Express is running on port 3000`)
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});