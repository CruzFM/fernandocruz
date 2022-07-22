import React from "react"
// import ProjectOne from "./projectsComponents/ProjectOne"
import ProjectElement from "./projectsComponents/ProjectElement"
import projectPlaceholder from "../images/projectPlaceholder.svg"
import placeHolderImage from "../images/placeholderImage.jpg"
import projectOne from "../images/Proyecto1-portfolio(2).png"

export default function Projects(props){
    return(
        <section className={props.darkMode ? "darkMode" : ""} id="projects">
            
            <div className="projects">

                <article className="projects--title">
                    <h2> Take a look at my projects! </h2>
                </article>

                <ProjectElement 
                    projectPlaceholder={projectOne}
                    title="The Rock Store"
                    projectDescription="E-commerce store built for the Javascript course offered by Coderhouse."
                    techologies="HTML, CSS, Bootstrap, Javascript, JQuery"
                />
                <ProjectElement 
                    projectPlaceholder={placeHolderImage}
                    title="Project Title"
                    projectDescription="Acá hablo del proyecto"
                />
                <ProjectElement 
                    projectPlaceholder={projectPlaceholder}
                    title="Project Title"
                    projectDescription="Acá hablo del proyecto"
                />
                <ProjectElement 
                    projectPlaceholder={projectPlaceholder}
                    title="Project Title"
                    projectDescription="Acá hablo del proyecto"
                />
                

                {/* <ProjectOne /> */}
                

                {/* <article className="projects--elements">

                    <div className="projects--elements_items">

                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            // className="projects--one_img"
                        />

                        <div>
                            <h4>
                                Project Title
                            </h4>

                            <p>
                                Here i talk about the project
                            </p>
                        </div>

                    </div>


                    <div className="projects--elements_items">
                        
                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--two_img"
                        />

                        <div>
                            <h4>
                                Project Title
                            </h4>

                            <p>
                                Here i talk about the project again
                            </p>

                        </div>

                    </div>


                    <div className="projects--elements_items">
                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--three_img"
                        />
            
                        <div>

                            <h4>
                                Project Title
                            </h4>

                            <p>
                                Here i talk about the project again
                            </p>

                        </div>

                    </div>


                    <div className="projects--elements_items">

                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--four_img"
                        />

                        <div>
                            <h4>
                                Project Title
                            </h4>

                            <p>
                                Here i talk about the project again
                            </p>

                        </div>

                    </div>


                </article> */}

            </div>
        </section>
    )
}