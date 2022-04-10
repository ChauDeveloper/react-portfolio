import React from 'react';
import './style.css'

function Navbar() {
    return (
        <ul id="navbar">
            <li><a href="default.asp">About Me</a></li>
            <li><a href="news.asp">Portfolio</a></li>
            <li><a href="contact.asp">Resume</a></li>
            <li><a href="about.asp">Contact</a></li>
        </ul>
    );
}

export default Navbar;