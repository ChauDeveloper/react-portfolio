import React from 'react';
import './style.css'

function Navbar(props) {
    const {
        aboutSelected,
        setAboutSelected
    } = props;

    return (
        <ul id="navbar">
            <li><a href="/" >About Me</a></li>
            <li><a href="/portfolio" >Portfolio</a></li>
            <li><a href="/resume" >Resume</a></li>
            <li><a href="/contact" >Contact</a></li>
        </ul>
    );
}

export default Navbar;