import React from 'react';
import './style.css'
import Profile from '../../assets/images/profile.JPG'
import Words from '../../assets/images/words.png'

function About() {


    return (
      
       <div id="about-section">

          <div id="about-text">
            <p id="hi">Hi, </p>
            <p class="animate__animated animate__bounceInLeft animate__delay-1s">My name is <span id="chau">Chau</span>,</p>
            <p class="animate__animated animate__bounceInLeft animate__delay-2s">and I’m a <span id="front-end">Front End Web Developer</span>.</p> 
            <p class="animate__animated animate__bounceInLeft animate__delay-3s">I’m a <span id="musician">musician</span>, a <span id="designer">designer</span>, a <span id="zumba">Zumba instructor</span>, a <span id="jewelrer">jewelrer</span> and a <span id="mom">Mom.</span> </p>
            <div id='wrapper'>
            <p class="animate__animated animate__bounceInLeft animate__delay-4s" id="static-txt" >My favorite words are: </p>
             <ul class="animate__animated animate__bounceInLeft animate__delay-5s" id="dynamic-txts">
              <li><span style={{color: "#ff7756"}}>Inspiring</span></li>
              <li><span style={{color: "#07beb8" }}>Positive</span></li>
              <li><span style={{color: "#f4978e"}}>Consistent</span></li>
              <li><span style={{color: "#5c88c1"}}>Courage</span></li>
            </ul> 
            </div>
          </div>

          <div id="profile-img">
            <img src={Profile} />
          </div>
          
       </div>
    
    );
}

export default About;