import React from 'react';
import ReactDom from 'react-dom';

import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
// 处理redux 异步的中间件
import thunk from 'redux-thunk';
import { counter } from './index.redux';

import { add, sub, asyncToZero } from './index.redux';


// function mapStateProps(state){
//   return {num:state};
// }

// const actionCreators = { add, sub, asyncToZero };

// App = connect(mapStateProps, actionCreators)(App);
@connect(
  state => ({num:state}), 
  {add, sub, asyncToZero}
)
class App extends React.Component{

  render(){
    // const store = this.props.store;
    const num = this.props.num;
    const addOne = this.props.add;
    const subOne = this.props.sub;
    const async0 = this.props.asyncToZero;
    return (
      <div>
        <h1>now is {num}</h1>
        <button onClick={addOne}>ADD</button>
        <button onClick={subOne}>SUB</button>
        <button onClick={async0}>To Zero_Aysnc</button>
      </div>
    );
  }
}

// // 再封装 APP,在前面使用在装饰符了
// function mapStateProps(state){
//   return {num:state};
// }

// const actionCreators = { add, sub, asyncToZero };

// App = connect(mapStateProps, actionCreators)(App);

// redux调试工具
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f;
// 创建store
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevTool));

ReactDom.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);

// function render(){
//   ReactDom.render(<App store={store} addOne={add} subOne={sub} async0={asyncToZero}/>,document.getElementById('root'));
// }
//
// render();
//
// store.subscribe(render);
//ReactDom.render(<App/>,document.getElementById('root'));
