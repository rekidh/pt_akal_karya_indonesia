const express = require('express');
const router = express.Router()
const home = require('../Controllers/Auth');

router
   .post('/login',home.login)
   .post('/logout',home.logout)
   .post('/register',home.register)


module.exports=router