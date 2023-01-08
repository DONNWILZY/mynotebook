const express = require('express');
//const passport = require('../config/passport');
const passport = require("passport") 
const router = express.Router();


//loggin paage authwith google
//route GET /auth/google 
router.get('/google', passport.authenticate('google', {scope: ['profile']}))


//call back route
//route GET/ 
router.get('/register', (req, res)=>{
    res.render('register.hbs');
})

//dashboad paage
//route GET/ 
router.get('/dashboard', (req, res)=>{
    res.render('dashboard.hbs');
})


module.exports = router;
