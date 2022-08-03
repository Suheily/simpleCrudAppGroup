const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
require('dotenv').config();
const PORT = 3200;


let db;
let dbConnectionString = process.env.DB_CONNECTION;
let dbName = 'albums';


MongoClient.connect(dbConnectionString, { useUnifiedTopology: true})
.then(client => {
    console.log('Connected to ' + dbName);
    db = client.db(dbName);
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, ()=>{
    console.log('The server is running on PORT ' + PORT)
});