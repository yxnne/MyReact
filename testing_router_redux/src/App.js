import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { add, sub, async_0 } from './reducer/index.redux';

@connect(
  (state) =>({number:state}),
  { add, sub, async_0 }
)
class App extends Component {
  render() {
    return (
      <div>
        <h2>Now The Number is : {this.props.number}</h2>
        <button onClick={this.props.add}>ADD</button>
        <button onClick={this.props.sub}>SUB</button>
        <button onClick={this.props.async_0}>ToZERO</button>
      </div>
    );
  }
}

export default App;
