/**
 * Created by btm on 3/13/15.
 */
var express = require('express'),
  http = require('http'),
  path = require('path'),
  routes = require('./app/routes'),
  exphbs = require('express3-handlebars'),
  mongoose = require('mongoose'),
  seeder = require('./app/seeder'),
  app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: app.get('views') + '/layouts'
}));

app.set('view engine','handlebars');

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('some-secret-value-here'));
app.use(app.router);
app.use('/', express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//Connect to the db server
mongoose.connect('mongodb://localhost/heft');
mongoose.connection.on('open', function(){
  console.log('Connected to Mongoose');
  //seeder.check();
});

//Routes list
routes.initialize(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server up: http://heft-node.dev:' + app.get('port'));
});


