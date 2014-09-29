var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname, {'index': ['index.html', 'default.html']}));
app.listen(3000);
