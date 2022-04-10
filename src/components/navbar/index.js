
import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';




function Navbar() {
  


    return (
        <ul id="navbar">
            <li className="item"><NavLink to={"/"} exact={true}>About Me</NavLink></li>
            <li className="item"><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
            <li className="item"><NavLink to={"/resume"}>Resume</NavLink></li>
            <li className="item"><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
    );
}

export default Navbar;