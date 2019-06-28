import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';
import MainPage from './pages/Main';
import Users from './pages/Users';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import Posts from "./pages/Posts";
import Post from "./pages/Post";


const  app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={MainPage}/>
                <Route path="users" component={Users}>
                    <Route path=":userId" component={User}/>
                </Route>
                <Route path="posts" component={Posts}>
                    <Route path=":postId" component={Post}/>
                </Route>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>, app);
