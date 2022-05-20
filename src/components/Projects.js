import React from "react"
import projectPlaceholder from "../images/projectPlaceholder.svg"

export default function Projects(){
    return(
        <section className="container-projectsSection">
            <div className="projects">

                <article className="projects--title">
                    <h2> PROJECTS </h2>
                </article>

                <article className="projects--one">
                    <img src={projectPlaceholder} 
                        alt="projectPlaceOne" 
                        className="projects--one_img"
                    />

                    <p>
                        Here i talk about the project
                    </p>

                </article>

                <article className="projects--two">
                    <img src={projectPlaceholder} 
                        alt="projectPlaceOne" 
                        className="projects--two_img"/>
                    I stand
                    
                </article>

                <article className="projects--three">
                    <img src={projectPlaceholder} 
                        alt="projectPlaceOne" 
                        className="projects--three_img"/>

                    
                </article>

                <article className="projects--four">
                <img src={projectPlaceholder} 
                    alt="projectPlaceOne" 
                    className="projects--four_img"/>
                </article>

            </div>
        </section>
    )
}