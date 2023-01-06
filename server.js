const express = require('express');
const port = process.env.port || 8080;
const ejs = require('ejs');
const bodyParser = require('body-Parser');
app = express();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);




mongoose.connect('mongodb://127.0.0.1:27017/member', {useNewUrlParser:true})
const db = mongoose.connection;
db.on('err', ()=>{
    console.log('error in connection')
})
db.once('open',()=>{
    console.log('connected')
})



// set ejs views
app.set('view engine', 'ejs');

//public folder for external resources
app.use(express.static('public'));

//body parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// server/
app.listen(port, ()=>console.log(`Port ${port} activated: || http://127.0.0.1:${port}/`))