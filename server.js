const express = require("express");

// Only Get, Post & Delete  --- other API methods needs to be implemented
// initilisation
const app = express();

// App use data in json format 
app.use(express.json());

const port = 8081;

const toDoList = ["java", "javascript", "python"];


// Get method
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);
});

// multi-level query params
app.get("/todos/user", (req, res) => {
    res.status(200).send(toDoList);
});


// Post method
app.post('/todos', (req, res) => {
    let newToDOList = req.body.items;
    toDoList.push(newToDOList);
    res.status(201).send({
        message : "Added task Successfully"
        //  newToDOList
    });
    console.log("Added Item", newToDOList);
})

// multi-level query params
app.post('/todos/user', (req, res) => {
    let newToDOList = req.body.items;
    toDoList.push(newToDOList);
    res.status(201).send({
        message : "Added task Successfully"
        //  newToDOList
    });
    console.log("Added Item", newToDOList);
})

//Delete method
app.delete('/todos', (req, res) => {
    const itemToBeDeleted = req.body.item;
    toDoList.find((ele, index) => {
        if(ele === itemToBeDeleted){
            toDoList.splice(index, 1);
        }
    })
    res.status(204).send({
        message: `Item deleted "${itemToBeDeleted}" `
    })
    console.log("Deleted Item", itemToBeDeleted);
})

app.all("/todos", (req, res) => {
    res.status(501).send({
        message: "Feature not Implemented"
    })
})

// for all the requests which are not implemented / its incorrct
app.all("*", (req, res) => {
    res.status(501).send({
        message: "Feature not Implemented"
    })
})

// listning the port
app.listen(port, ()=> {
    console.log(`NodeJS server running on port number ${port}`);
})

