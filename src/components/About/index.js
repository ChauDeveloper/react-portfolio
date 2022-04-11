import React from 'react';
import './style.css'
import Profile from '../../assets/images/profile.JPG'

function About() {
    return (
       <div id="about-section">

          <div id="about-text">
            <p class="first-element" id="hi">Hi, </p>
            <p>My name is <span id="chau">Chau </span>and I’m a <span class="second-element">Front End Web Developer.</span></p> 
            <p>I’m a <span class="third-element">musician</span>, a <span class="second-element">designer</span>, a <span class="first-element">Zumba instructor</span>, a <span class="third-element">jewelrer</span> and a <span class="first-element">Mom.</span> </p>
            <p>My favorite words are inspiring, positive, creative, uplifting, consistent, courage, kind, brave, strong, self-motivating</p>
          </div>

          <div id="profile-img">
            <img src={Profile} />
          </div>
          
       </div>
    );
}

export default About;