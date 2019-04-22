import React from 'react';
import LoginForm from "../../Login";


const Nav = () =>{
    return (
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <LoginForm/>
            </div>
             </nav>
    )
}

export default Nav;


