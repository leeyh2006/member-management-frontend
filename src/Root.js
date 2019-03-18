import React from 'react';
import App from './components/App';
import SignUpForm from './components/biz/sign/SignUpForm';
import {Provider} from 'react-redux';
import store from './store';
import {Router,Route,browserHistory} from 'react-router';


const Root = () => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}></Route>
                <Route path="/signUp" components={SignUpForm}/>
            </Router>
        </Provider>

    );
};

export default Root;