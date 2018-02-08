import axios from 'axios';

// 设置拦截器
axios.interceptors.request.use(config=>{
  console.log('START RQUEST');
  return config;
});

axios.interceptors.response.use(config=>{
  console.log('GET ANSWER');
  return config;
});
