import LoginForm from '../components/Login';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginContainer extends Component{
    render() {
        return(
            <div>
                <LoginForm/>
            </div>

        )
    }
}
export default connect(
)(LoginContainer);

