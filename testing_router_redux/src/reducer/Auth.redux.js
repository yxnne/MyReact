import axios from 'axios';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const USER_DATA = "USER_DATA";
// reducer
const initData = {
  isAuth:false, user:'yy'
};
export function auth(state=initData, action){
  console.log('see the action', action);

  switch (action.type){
    case LOGIN:
      return {...state, isAuth:true};
    case LOGOUT:
      return {...state, isAuth:false};
    case USER_DATA:
      return {...state, user:action.loaded.user}; // 这个action.loaded是是我在dispatch的时候传递的
    default:
      return state;
  }
}

// action creator
export function login(){
  return {type:LOGIN};
}
export function logout(){
  return {type:LOGOUT};
}
// 这个action creator 定义时 接受参数，它将作为action的属性一起传递，属性名自定义
function user(data){
  return {type:USER_DATA, loaded:data};
}
export function getUser(){
  return (dispatch)=>{
    axios.get('/userdata')
    .then((rsp)=>{
      if(rsp.status === 200){
        dispatch(user(rsp.data));
      }
    });
  }
}
