import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { counter } from './reducer/index.redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// redux调试工具
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f;
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevTool));

// A 组件
function A(props){
	return (<h2>A Component</h2>);
}
// B 组件
function B(props){
	return (<h2>B Component</h2>);
}
// 404
class C404 extends React.Component{
	render(){
		return (
			<h2>{this.props.match.params.location}, 404 NOT Found</h2>
		);
	}
}


ReactDOM.render(
	(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<ul>
						<li><Link to="/">App</Link></li>
						<li><Link to="/a">A</Link></li>
						<li><Link to="/b">B</Link></li>
					</ul>
					<Switch>
						<Route path="/" exact component={App}></Route>
						<Route path="/a" component={A}></Route>
						<Route path="/b" component={B}></Route>
						<Route path="/:location" component={C404}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	),
	document.getElementById('root'));
//registerServiceWorker();
