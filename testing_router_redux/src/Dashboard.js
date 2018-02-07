import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { logout } from './reducer/Auth.redux';

// A 组件
function A(props){
	return (<h2>A Component</h2>);
}
// B 组件
function B(props){
	return (<h2>B Component</h2>);
}
@connect(
  state=>(state.auth), { logout }
)
class Dashboard extends React.Component{
  render(){
    console.log(this.props);
    const redirectToLogin = <Redirect to='/login'></Redirect>;
    const app = (
      <div>
      {this.props.isAuth?<button onClick={this.props.logout}>{this.props.user},Logout</button>:null}
        <ul>
          <li><Link to='/dashboard'>App</Link></li>
          <li><Link to='/dashboard/a'>A</Link></li>
          <li><Link to='/dashboard/b'>B</Link></li>
        </ul>

        <Route path="/dashboard" component={App}></Route>

        <Route path="/dashboard/a" component={A}></Route>
        <Route path="/dashboard/b" component={B}></Route>

      </div>
    );
    return (
      this.props.isAuth?app:redirectToLogin
    );
  }
}

export default Dashboard;
