const express = require('express');
const mongoose = require('mongoose');

// mongodb 的 url
// const DB_URL = 'mongodb://127.0.0.1:27017';
const DB_URL = 'mongodb://127.0.0.1:27017/test'; // test要是没有会新建,test是集合
// mongoose 去链接数据库
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
  console.log("mongodb has connected and I noticed it ~~");
  console.log("mongoose is helpful ~~~~");
});

// 类似于建立 MySQL 的表,文档模型
const User = mongoose.model('user', new mongoose.Schema({
  name:{type:String, require:true},
  age:{type:Number,require:true}
}));

// 新建数据
User.create({
  name:"ppp",
  age:5
},(err, doc)=>{
  if (!err){
    console.log(doc);
  }else{
    console.log(err);
  }
});

// 删除age是18的对象
User.remove({age:18},(e, d)=>{
  console.log(d);
});

// 更新名字是jerk的
User.update({name:"jerk"}, {'$set':{age:77}}, (err, doc)=>{
  console.log(doc);
});

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
  // response.json({
  //   type:"test",
  //   name:"express"
  // });

  User.find({},(err, doc)=>{
    response.json(doc);
  });
});
