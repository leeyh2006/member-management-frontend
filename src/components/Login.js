import React from 'react';
import Modal from 'react-modal';
import '../vendor/css/login/login.css'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('LoginForm');


class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openModal}>Sign in</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <div className="wrapper">
                        <form className="form-signin">
                            <h2 className="form-signin-heading">Please login</h2>
                            <input type="text" className="form-control" name="username" placeholder="Email Address"
                                   required="" autoFocus=""/>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                                   required=""/>
                            <label className="checkbox">
                                <input type="checkbox" value="remember-me" id="rememberMe"
                                       name="rememberMe"/> Remember me
                            </label>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                            <button className="btn btn-lg btn-danger btn-block" onClick={this.closeModal}>close</button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default LoginForm;
