import React from 'react';
import { connect } from 'react-redux';
import { login } from './reducer/Auth.redux';
import { Redirect } from 'react-router-dom';
import YiconInput from './view/y-icon-input/y-icon-input';

@connect(
  state=>(state.auth), { login }
)
class Auth extends React.Component{

  onChangeInput(k, v){
    console.log('input change k is', k);
    console.log('input change v is', v);
  }
  render(){
    return (
      <div>
        {this.props.isAuth?<Redirect to="/dashboard"></Redirect>:null}
        <h1>Auth Page</h1>
        <button onClick={this.props.login}>Login</button>
        <div style={{width:"200px", marginTop:"50px", marginLeft:"20px"}}>
          <YiconInput height="18px" placeHolder="请输入您的用户名" keyPlaceHolder="用户名" onChange={(v)=>{this.onChangeInput('user',v)}}/>
        </div>

      </div>
    );
  }
}

export default Auth;
