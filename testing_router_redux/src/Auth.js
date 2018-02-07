import React from 'react';
import { connect } from 'react-redux';
import { login } from './reducer/Auth.redux';
import { Redirect } from 'react-router-dom';

@connect(
  state=>(state.auth), { login }
)
class Auth extends React.Component{
  render(){
    return (
      <div>
        {this.props.isAuth?<Redirect to="/dashboard"></Redirect>:null}
        <h1>Auth Page</h1>
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }
}

export default Auth;
