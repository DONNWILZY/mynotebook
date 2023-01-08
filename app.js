const path = require('path')
const express = require('express');
const dotevn = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session')
const mongoose = require('mongoose');

//load config
dotevn.config({ path: './config/config.env'});

//express-session middle-ware


//passport
require('./config/passport')(passport);


//db linking
/*
const connectDB = require('./config/db') || mongoose.connect('mongodb://127.0.0.1:27017/member', {useNewUrlParser:true})
const db = mongoose.connection;
db.on('err', ()=>{
    console.log('error in connection')
})
db.once('open',()=>{
    console.log('connected')
})
*/






//connectDB()
const app = express();

//logging 
if (process.env.NODE_ENV === 'developmet'){
    app.use(morgan('dev'))
}

//handlebars
app.engine(
    "hbs",
    exphbs.engine({
      extname: ".hbs",
      defaultLayout: "main",
      layoutsDir: "views/layout"
    })
  );
  app.set('view engine', '.hbs');
/*
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
//  app.set('views', 'views'); 
*/

 //sessions
 app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

//passpot middleware
app.use(passport.initialize())
app.use(passport.session())




//port
const PORT = process.env.PORT || 3000

//Route
app.use('/', require('./routes/index'))

//static folde
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT,()=>console.log(`PORT ${PORT} is active || 127.00.1/${PORT}`))