
const express = require('express')
const { rmSync } = require('fs')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//get method (response) return the "hello world"
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//in get method setting the route '/test'
app.get('/test', (req, res)=>{
    //here giving the file path from which we want to display data
    res.sendFile(__dirname + '/index.html')
})

//in get method setting the route '/name'
app.get('/name', (req, res)=>{
    console.log(req.query.fname);
    //get the name from the form and show on the page
    res.send('Hello '+req.query.fname+ ' ' +req.query.lname);
})

//in post method setting the route '/name'
app.post('/name', (req, res)=>{
    console.log(req.body);
    //get the fname and lname using 'req.body.fname' from the form and show on the page
    res.send('Hello '+req.body.fname+ ' ' +req.body.lname +' from POST');
})

//in get method setting the route '/api/books'
app.get('/api/books', (req, res) => {
    //books array
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419", 
            "pageCount": 0, 
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", 
            "status": "MEAP", 
            "authors": ["Rick Umali"], 
            "categories": [] 
        },
        { 
            "title": "MongoDB in Action, Second Edition", 
            "isbn": "1617291609", 
            "pageCount": 0, 
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", 
            "status": "MEAP", 
            "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"], 
            "categories": [] 
        },
        { 
            "title": "Getting MEAN with Mongo, Express, Angular, and Node", 
            "isbn": "1617292036", 
            "pageCount": 0, 
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", 
            "status": "MEAP", 
            "authors": ["Simon Holmes"], 
            "categories": [] 
        } 
    ]
    
    res.status(200).json({
        mybooks:books
    })    
})

//in get method creating new route named "/datarep".
app.get('/datarep', (req, res) => {
    // response.send method send the "Hello from DataRep" to the page
    res.send('Hello from DataRep')
})

//in get method creating new route named "/hello".
app.get('/hello/:name', (req, res) => {             // '/hello/:name' creating route hello and give the user opportunity to write next route
    console.log(req.params.name);
    //sending the text or information to the server to show on the page
    res.send('Hello ' + req.params.name);
})

//app.listen method return the written message with the port number
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})