import React from 'react';
import './style.css'
import Profile from '../../assets/images/profile.png'

function About() {
    return (
       <div id="about-section">

          <div id="about-text">
            <p>Donut oat cake jujubes shortbread dessert pastry donut marzipan sweet roll. I love halvah tootsie roll jujubes cookie. Jujubes soufflé jelly sweet roll caramels cupcake. Oat cake danish sweet roll pie donut.</p> 
            <p>I love biscuit bear claw caramels chocolate cake topping jujubes. Carrot cake tootsie roll cake tiramisu muffin. Biscuit ice cream jelly-o tiramisu cake sweet. Chocolate cake cheesecake jujubes lemon drops sugar plum brownie biscuit lemon drops.</p>
          </div>

          <div id="profile-img">
            <img src={Profile} />
          </div>
          
       </div>
    );
}

export default About;