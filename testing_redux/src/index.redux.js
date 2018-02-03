import { createStore } from 'redux';
const ADD = 'ADD';
const SUB = 'SUB';
// 根据action 变化state
// 这个就是reducer
export function counter(state=0, action){
  switch(action.type){
    case ADD:
      return state + 1;
    case SUB:
      return state - 1;
    default:
      return 10;
  }
}
// action creator
// 对外暴露这些 action creator 函数来产生action对象
export function add(){
  return {type:ADD};
}
export function sub(){
  return {type:SUB};
}
