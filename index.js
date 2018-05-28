var http = require('http');     




console.log('rosko mama')
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello DevOps');
});
server.listen(8080);

