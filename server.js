const http = require("http");

const port = 8081; 

http.createServer((require, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h2>Hi World, Server Started </h2>");
    response.end();
})
.listen(port, () => {
    console.log('NodeJS server running on port number ${port}', port);
} );
 