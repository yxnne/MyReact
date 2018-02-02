const express = require('express');

// 新建app
const app = express();
// 监听
app.listen(9090, function(){
  console.log("node js express has been started");
});

// 根目录，直接发送html
app.get('/', (require, response) =>{
  // 用response对象
  response.send('<h1>Hello World ~~ in Express</h1>');
});

// '/json'
app.get('/json', (require, response) =>{
  // 用response对象
  response.json({
    type:"test",
    name:"express"
  });
});
