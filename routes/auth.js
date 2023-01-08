const express = require('express');
//const passport = require('../config/passport');
const passport = require("passport") 
const router = express.Router();


//loggin paage authwith google
//route GET /auth/google 
router.get('/google', passport.authenticate('google', {scope: ['profile']}))


// google auth call back route
//route GET/ /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res)=>{
    res.redirect('/dashboard')
})

//dashboad paage
//route GET/ 
router.get('/dashboard', (req, res)=>{
    res.render('dashboard.hbs');
})


module.exports = router;
