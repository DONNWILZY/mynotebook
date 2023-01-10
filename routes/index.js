const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth')


//loggin paage
router.get('/', (req, res)=>{
    res.render('login', {
        layout: 'login'
    });
})


//register paage
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
