const express = require('express');
const login = require('../controllers/users');

const router = express.Router();

router.post('/',(req,res,next) =>{
  let username=req.params['username'];
  let password=req.params['password'];

  let result=login.check(username,password);

  if(!result.error){
    res.status(200).json(result.user);
  } else {
    res.status(400).json(result);
  }
});
module.exports = router;
