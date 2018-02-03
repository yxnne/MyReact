import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { counter } from './index.redux';

import {add} from './index.redux';

class App extends React.Component{

  render(){
    const store = this.props.store;
    const num = store.getState();
    return (
      <div>
        <h1>now is {num}</h1>
        <button onClick={()=>store.dispatch(add())}>ADD</button>
      </div>
    );
  }
}

const store = createStore(counter);

function render(){
  ReactDom.render(<App store={store}/>,document.getElementById('root'));
}

render();

store.subscribe(render);
//ReactDom.render(<App/>,document.getElementById('root'));
