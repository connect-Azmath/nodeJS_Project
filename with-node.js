const { AsyncLocalStorage } = require("async_hooks");
const { on } = require("events");
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
        }else if(method === 'POST'){
            let body = "";
            req.on('error', (err) => {
                console.log("Error - ", err);
            }).on('data', (chunk) => {
                body += chunk;
                console.log("chunk of data ", chunk);
            }).on('end', () => {
                body = JSON.parse(body);
                console.log("Body data ", body);
                let newToDo = toDoList;
                 newToDo.push(body.tech); // need to use 'tech' as key in payload
                 console.log(newToDo);        
                 
                //  res.writeHead(201);
                //  res.write(body);      
            })
      
        }else if(method === 'DELETE'){
            let body = "";
            req.on('error', (err) => {
                console.log(err);
            }).on('data', (chunk)=> {
                body += chunk ;
                
            }).on('end', () => {
                body = JSON.parse(body);
                let deleteItem = body.item; // need to use 'item' as key in payload
                
                for(let i=0 ; i< toDoList.length; i++){
                    if(toDoList[i] === deleteItem){
                        toDoList.splice(i,1);
                        break;
                    }
                }

                // toDoList.find((ele, index) => {
                //     if(ele === deleteItem){
                //         toDoList.splice(index, 1);
                //     }
                // })

            })
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
    console.log(`NodeJS server running on port number ${port}`);
} );
 