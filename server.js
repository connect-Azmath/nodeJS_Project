const http = require("http");   // package import

const port = 8081; 

const toDoList = ["java", "javascript", "python"];

http.createServer((req, res) => {
    const{method, url} = req;
    console.log(method , url);

    if(url === '/todos'){
        if(method === 'GET'){
            res.writeHead(200);
            res.write(toDoList.toString());
        }
    } else if (url === '/azmath'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2> Default page </h2>");

    } else if (url === '/any'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2> Default page </h2>");

    }else if (url === '/'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2> Default page </h2>");

    }  else {
        res.writeHead(501); // error code
    }
    res.end();
})

// http.createServer((require, response) => {
//    // callback function
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<h2>Hi World, Server Started </h2>");
//     response.end();
// })
.listen(port, () => {
     // callback function
    console.log('NodeJS server running on port number ${port}', port);
} );
 