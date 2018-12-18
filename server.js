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





app.listen(3000);