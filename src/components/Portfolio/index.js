import React, { useState } from 'react';
import './style.css'

function Portfolio() {
    const [photos] = useState([
        {
            name: "Nique's Eats",
            description: "Group Project. MERN Stack implemented. Nique's Eats is a meal delivery service that delivers homemade meals to customers any day of the week. There are dozens of dishes to choose from as well as sides and desserts. Customers can navigate to this site, choose what meals they want, choose what day they would like their meals, and have them delivered right to their doorstep.",
            link: "https://niques-eats.herokuapp.com/",
            GitHub: "https://github.com/camyacodes/niques_eats"
        },
        {
            name: "No Gear Fitness",
            description: "Group Project. Built with HTML, CSS, Bootstrap, Javascript, Jquery, Handlebars, Sequelize. No Gear Fitness targets people who choose to workout at home and don't have access to equipment. Trying to maintain a workout schedule and want to track their workout journey.",
            link: "https://young-bastion-49807.herokuapp.com/",
            GitHub: "https://github.com/Dapr1nc3/workout-app"
        },
        {
            name: "Oh Snap",
            description: "Built with React. A portfolio built for Lyza,a photographer for local businesses. ",
            link: "http://chaudeveloper.github.io/photo-port",
            GitHub: "https://github.com/ChauDeveloper/photo-port"
        },
        {
            name: "Developer's Blog",
            description: "Built with Express.js, Handlebars, Sequelize. This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. ",
            link: "https://developers-blog-bychau.herokuapp.com/",
            GitHub: "https://github.com/ChauDeveloper/developers-blog"
        },
        {
            name: "Food Festival",
            description: "Implemented with PWA, or Progressive Web Application, allow users to interact with the application even when there is no internet connection or cell service. This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. ",
            link: "https://chaudeveloper.github.io/food-festival/",
            GitHub: "https://github.com/ChauDeveloper/food-festival"
        },
        {
            name: "Pizza Hunt",
            description: "Implemented MongoDB, Mongoose (NoSQL database). In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. ",
            link: "https://pizza-hunt-chaudeveloper.herokuapp.com/",
            GitHub: "https://github.com/ChauDeveloper/pizza-hunt"
        },
    ])

    return (
        <div id='portfolio'>
            {photos.map((data, i) => (
            <div id='project'>    
               <a href={data.link} target="_blank">
                <img
                src={require(`../../assets/images/portfolio/${i}.png`)}
                alt={data.name}
                class="image"
                key={data.name}
              /></a>


            <a href={data.GitHub} target="_blank" id="project-name"><h5>{data.name}</h5></a>
              </div>
                ))}
               
          

        </div>
    );
}

export default Portfolio;