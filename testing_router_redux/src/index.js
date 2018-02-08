import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { counter } from './reducer/index.redux';
//合并reducer
import reducers from './reducer/reducers';

import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';

import Auth from './Auth.js';
import Dashboard from './Dashboard.js';

import './axios_config';
// redux调试工具
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f;
const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTool));



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
				<Switch>
					<Route path="/login" component={Auth}></Route>
					<Route path="/dashboard" component={Dashboard}></Route>
					<Route path="/no" component={C404}></Route>
					<Redirect to='/no'></Redirect>
				</Switch>

			</BrowserRouter>
		</Provider>
	),
	document.getElementById('root'));
//registerServiceWorker();
