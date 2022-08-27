import React from "react";
import ProjectElement from "./projectsComponents/ProjectElement";
import projectPlaceholder from "../images/projectPlaceholder.svg"
import projectOne from "../images/Proyecto1-portfolio(2).png";
import projectTwo from "../images/Proyecto2-portfolio.png";
import projectThree from "../images/Proyecto3-portfolio.png";

export default function Projects(props){
    return(
        <section className={props.darkMode ? "darkMode" : ""} id="projects">
            
            <div className="projects">

                <article className="projects--title">
                    <h2> Take a look at my projects! </h2>
                </article>

                <ProjectElement 
                    projectImage={projectOne}
                    title="The Rock Store"
                    projectDescription="This was my first project. It's an E-commerce store website built for the Javascript course offered by Coderhouse."
                    techologies="HTML, CSS3, Bootstrap4, Javascript, JQuery."
                    link="https://cruzfm.github.io/proyecto-final-coderhouse/"
                />
                <ProjectElement 
                    projectImage={projectTwo}
                    title="CFM Store"
                    projectDescription="E-commerce store website built using the Fakestore API, built for the React course offered by Coderhouse."
                    techologies="React, Javascript, CSS3, Bootstrap4."
                    link="https://cfmstore-coderhouse.vercel.app/"
                />
                <ProjectElement 
                    projectImage={projectThree}
                    title="CFM YuGiOh Cardipedia"
                    projectDescription="A project dedicated to one of my hobbies: Yu-gi-oh cards. It's website built consuming the YGOpro API, and it's made for searching your favorite cards, checking prices and building a deck. It's still under development for further improvements."
                    techologies="React, Javascript, CSS3."
                    link="https://cfm-ygocardipedia.vercel.app/"
                />
                <ProjectElement 
                    projectImage={projectPlaceholder}
                    title="Project Title"
                    projectDescription="Acá hablo del proyecto"
                />
                
            </div>
        </section>
    );
};