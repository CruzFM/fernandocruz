import React from "react"
import projectPlaceholder from "../images/projectPlaceholder.svg"

export default function Projects(props){
    return(
        <section className={props.darkMode ? "darkMode" : ""} id="projects">
            
            <div className="projects">

                <article className="projects--title">
                    <h2> Take a look at my projects! </h2>
                </article>

                

                <article className="projects--elements">

                    <div className="projects--elements_one">

                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--one_img"
                        />

                        <p>
                            Here i talk about the project
                        </p>

                    </div>


                    <div className="projects--elements_two">
                        
                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--two_img"
                        />

                        <p>
                            Here i talk about the project again
                        </p>

                    </div>


                    <div className="projects--elements_three">
                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--three_img"
                        />

                        <p>
                            Here i talk about the project again
                        </p>

                    </div>


                    <div className="projects--elements_four">

                        <img src={projectPlaceholder} 
                            alt="projectPlaceOne" 
                            className="projects--four_img"
                        />

                        <p>
                            Here i talk about the project again
                        </p>

                    </div>


                </article>


                {/* <article className="projects--one">
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
                </article> */}

            </div>
        </section>
    )
}