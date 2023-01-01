const express = require('express');
const router = express.Router()
const data = require('../Controllers/DataControler');

router
   .get('/get',data.read)
   .post('/post',data.create)
   .put('/update',data.update)
   .delete('/delete',data.delete)
   .get('/search',data.search)


module.exports=router