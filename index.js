
const express = require('express')
const mongoose =require('mongoose');

//connecting to mongo
const mongoURI="mongodb://0.0.0.0:27017";
mongoose.connect(mongoURI)
console.log("connected");


const app = express()
const port = 1000
app.use(express.json());


app.use('/api/stud',require('./stud'))

app.listen(port, () => {
  console.log(`Student listening on port http://localhost:${port}`)
})