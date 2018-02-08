const express = require('express');
const mongoose = require('mongoose');



// 新建app
const app = express();

app.listen(9090, ()=>{
  console.log('simple server has been created');
});

// let it can response a json data
app.get('/jsondata', (req, rsp)=>{
  rsp.json({
    type:"test",
    name:"express"
  });
});

app.get('/userdata', (req, rsp)=>{
  rsp.json({
    user:'abcde',
    age:20
  });
});
