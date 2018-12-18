const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
var routes = require('./app/routing/htmlRoutes'); //View Router
var api = require('./app/routing/apiRoutes'); //API Router

app.use('/', routes);
app.use('/api', api);





app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });