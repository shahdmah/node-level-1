const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.sendFile("./views/home.html" , {root: __dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

mongoose.connect('mongodb+srv://shahdsalama:pkTBJP!iBtk5KV8/all-data@cluster0.uedxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( () => { app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})})
.catch( (err) => {console.log(err)});