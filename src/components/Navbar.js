import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    render(){
        let loginString = 'Login'
        let token = localStorage.getItem('token')
        if (token) {
            loginString = 'Logout'
        } else {
            loginString = 'Login'
        }
        
        return(
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Movie Store</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to='/'>Movies</Link>
                    </li>

                    <li>
                        <Link to='/tickets'>My Tickets</Link>
                    </li>

                    <li>
                        <Link to='/auth'>{ loginString }</Link>
                    </li>
                    
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;

