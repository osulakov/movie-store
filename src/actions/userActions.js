import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SERVER_LOCAL_HOST_URL } from '../constants';

export const login = (data) => (dispatch) => {
    console.log('login actions', data)
    let email = data.email;
    let password = data.password;
    if(email === '' || password === '') {
        alert('Enter your email and password first.')
    } else {
        axios.post(`${SERVER_LOCAL_HOST_URL}api/user/login`, {email: email, password: password})
            .then(result => {
                
                let token = result.data.token;
                localStorage.setItem('token', token);
                
                let decoded = jwt.decode(token);
                let userId = decoded.userId;
                localStorage.setItem('userId', userId);
                let email = decoded.email;
                let userName = decoded.name;
                
                dispatch({type: "USER_AUTH", payload: {userId: userId, userName: userName, email: email}})
                console.log(localStorage.getItem('token'))
                
            })
            .catch(err => {
                console.log('auth error: ' + err)
            })  
    }
     
}

export const signup = (data) => (dispatch) => {
    console.log('signup actions', data)
    let name = data.name;
    let email = data.email;
    let password = data.password;
    let re_password = data.re_password;

    if(email === ''|| password === '' || re_password === '') {
        alert('Enter your email and password first.')
    } else if (password !== re_password) {
        alert('your password does not match.')
    } else {
        axios.post(`${SERVER_LOCAL_HOST_URL}api/user/signup`, {name: name, email: email, password: password})
            .then(result => {
                
                let token = result.data.token;
                localStorage.setItem('token', token);
                
                let decoded = jwt.decode(token);
                let userId = decoded.userId;
                localStorage.setItem('userId', userId);
                let email = decoded.email;
                let userName = decoded.name;
                
                dispatch({type: "USER_AUTH", payload: {userId: userId, userName: userName, email: email}})
                console.log(localStorage.getItem('token'))
                
            })
            .catch(err => {
                console.log('auth error: ' + err)
            })
    }

       
}