import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import fire from '../../firebase/Fire'
import Signup from './Signup';
import { authStatus, updateEmailText, updatePasswordText, submitAuthAction } from './../../redux/auth-reducer'


class SignupContainer extends React.Component {
    state = {
        redirect: false,
    }

    handleSignup = () => {
        fire.auth().createUserWithEmailAndPassword(this.props.email, this.props.password)
            .then((userCredential) => {
                // Signed in 
                // var user = userCredential.user;
                console.log(userCredential.user);
                this.setState({ redirect: true })
                this.props.submitAuthAction()

            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // // ..
            });
    }

    render() {
        if (this.state.redirect) return <Redirect to='/editProfile' />
        return (
            <Signup email={this.props.email} password={this.props.password} isAuth={this.props.isAuth} handleSignup={this.handleSignup} updateEmailText={this.props.updateEmailText} updatePasswordText={this.props.updatePasswordText} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        isAuth: state.auth.isAuth
    }
}

// const mapDispatchToProps

export default connect(mapStateToProps, { submitAuthAction, authStatus, updateEmailText, updatePasswordText })(SignupContainer)