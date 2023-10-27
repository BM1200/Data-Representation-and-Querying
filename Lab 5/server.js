//I got this from expressjs.com
const express = require('express')
const app = express()
const port = 4000

//requests data from the input of the lname and fname in index.html
app.get('/name', (req, res)=>{
    res.send('Hello '+ req.query.fname+' '+ req.query.lname)
})

//api created in data variable
const data = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },
    
      {
    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    "isbn": "1617292036",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
    "status": "MEAP",
    "authors": ["Simon Holmes"],
    "categories": []
    }
    ];

//gets request and sends it off
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//any name I put in URL it will work with req.params.name
app.get('/hello/:name', (req, res) => {
    res.send('Hello '+req.params.name)
  })

app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying!')
  })
//__dirname gets the current directory
//we use the index.html and get the data from it
app.get('/test', (req, res) =>{
    res.sendFile(__dirname+'/index.html')
})

//gets the books API 
app.get('/api/books', (req, res) =>{
    res.json({
        myBooks:data,
        "Message":"Hello from server.js"
    })
  })
//app listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})