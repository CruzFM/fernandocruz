import React from "react";
import ProjectElement from "./projectsComponents/ProjectElement";
import projectPlaceholder from "../images/projectPlaceholder.svg"
import projectOne from "../images/Proyecto1-portfolio(2).png";
import projectTwo from "../images/Proyecto2-portfolio.png";

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
                    projectDescription="E-commerce store website built for the Javascript course offered by Coderhouse."
                    techologies="HTML, CSS, Bootstrap, Javascript, JQuery."
                    link="https://cruzfm.github.io/proyecto-final-coderhouse/"
                />
                <ProjectElement 
                    projectImage={projectTwo}
                    title="CFM Store"
                    projectDescription="E-commerce store website built using the Fakestore API, built for the React course offered by Coderhouse."
                    techologies="Css, Bootstrap, Javascript, React."
                    link="https://cfmstore-coderhouse.vercel.app/"
                />
                <ProjectElement 
                    projectImage={projectPlaceholder}
                    title="Project Title"
                    projectDescription="Acá hablo del proyecto"
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