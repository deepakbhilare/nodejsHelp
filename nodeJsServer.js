var http = require('http');

var simpleServer = http.createServer(function(request, response){
    response.writeHead(200,{"content-Type" : "text/plain"});
    response.end("Everything worked fine");
});

simpleServer.listen(8000);
console.log("Server id running at http://127.0.0.1:8000/");