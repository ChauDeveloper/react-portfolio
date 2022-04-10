import React from 'react';
import './style.css'

function Resume() {
    return (
       <div id="resume">

           <div id="skills">
               <h2>Skills:</h2>
               <div id="skill-list">
                   <div id="left-list">
                    <ul>
                        <li>HTML</li><li>CSS</li><li>Javascript</li><li>Node.js</li>
                    </ul>
                    <ul>
                        <li>••••••••◦◦</li><li>••••••••◦◦</li><li>••••••◦◦◦◦</li><li>•••••◦◦◦◦◦</li>
                    </ul>
                    </div>

                    <div id="right-list">
                    <ul>
                    <li>MySQL</li><li>MongoDB</li><li>Express.js</li><li>React.js</li>
                    </ul>
                    <ul>
                        <li>••••◦◦◦◦◦◦</li><li>•••◦◦◦◦◦◦◦</li><li>•••◦◦◦◦◦◦◦</li><li>•••••••◦◦◦</li>
                    </ul>
                    </div>
                </div>
           </div>

           <div id="education">
                <h2>Education:</h2>
                <ul>
                    <li>UCF Coding Bootcamp - Full Stack Web Developer, 04/2022</li>
                    <li>Berklee College of Music - Bacherlor of Arts in Song Writing, 06/2020</li>
                    <li>Valencia Community College - Associate of Arts</li>
                </ul>

           </div>

           <div id="soft-skills">
                <h2>Soft Skills:</h2>
                    <div id="soft-skill-list">
                            <ul>
                                <li>Active Listening</li><li>Positive Mindset</li><li>Work Ethic</li>
                            </ul>
                            <ul>
                            <li>Comunication</li><li>Ability to Learn</li><li>Creativity</li>
                            </ul>
                        </div>
           </div>

            <div id="download">
           <i className="fa-solid fa-file-arrow-down"></i><p>Download my Resume</p>
           </div>

       </div>
    );
}

export default Resume;