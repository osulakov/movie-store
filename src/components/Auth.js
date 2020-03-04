import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, signup } from '../actions/userActions';

class Auth extends Component {

    state = {
        loggedIn: false,
        isSignUp: false,
        name: "",
        email: "",
        password: "",
        re_password: "" 
    }

    handleChangeLoginMode = () => {
        let mode = !this.state.isSignUp
        this.setState({
            isSignUp: mode
        })
    }

    handleChangeName = (e) => {
        let name = e.target.value;
        this.setState({
            name: name
        })
    }

    handleChangeEmail = (e) => {
        let email = e.target.value;
        this.setState({
            email: email
        })
    }

    handleChangePassword = (e) => {
        let password = e.target.value;
        this.setState({
            password: password
        })
    }

    handleChangeRePassword = (e) => {
        let re_password = e.target.value;
        this.setState({
            re_password: re_password
        })
    }

    handleLogin = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(data)
        this.setState({
            loggedIn: true
        })
    }

    handleSignup = () => {
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            re_password: this.state.re_password
        }
        this.props.signup(data)
        this.setState({
            loggedIn: true
        })
    }

    handleLogout = () => {
        localStorage.setItem('token', '')
        this.setState({
            loggedIn: false
        })
    }

    render() {

        const token = localStorage.getItem('token')

        if(token) {
            return (
                <div style={{width: "400px", margin:"auto"}}>
                    <p>You are logged in.</p>
                    <a class="waves-effect red btn" onClick={this.handleLogout}>Logout</a>
                </div>
            )
        } else {
            const isSignUp = this.state.isSignUp;
            return (
                <div style={{width: "400px", margin:"auto"}}>
                    {isSignUp ? (
                        <div>
                            <p>Creating new account.</p>
                            <form>
                                <label>name</label>
                                <input id="name" type="text" placeholder="Enter your name" onChange={this.handleChangeName}/>
                                <label>Email</label>
                                <input id="email" type="text" placeholder="Enter your email" onChange={this.handleChangeEmail}/>
                                <label>Password</label>
                                <input id="password" type="text" placeholder="Enter your password" onChange={this.handleChangePassword}/>
                                <label>Re-enter Password</label>
                                <input id="re-enter-password" type="text" placeholder="Re-enter your password" onChange={this.handleChangeRePassword}/>
                                <a class="waves-effect red btn" onClick={this.handleSignup}>Sign Up</a>
                                <p>Already have an account? Just <a style={{color: "red"}} onClick={this.handleChangeLoginMode}>Login</a></p>
                            </form>
                        </div>
                    ):(
                        <div> 
                            <p>Login into your account to make purchase.</p>
                            <form>
                                <label>Email</label>
                                <input id="email" type="text" placeholder="Enter your email" onChange={this.handleChangeEmail}/>
                                <label>Password</label>
                                <input id="password" type="text" placeholder="Enter your password" onChange={this.handleChangePassword}/>
                                <a class="waves-effect red btn" onClick={this.handleLogin}>Login</a>
                                <p>Do not have an account yet? <a style={{color: "red"}} onClick={this.handleChangeLoginMode}>Create New</a></p>
                            </form>
                        </div>
                    )}
                    
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(login(data)) },
        signup: (data) => { dispatch(signup(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

Auth.propTypes = {
    loggedIn: PropTypes.bool,
    login: PropTypes.func,
    signup: PropTypes.func
}