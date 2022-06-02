import React from "react"
// import placeholder from "../images/placeholder.svg"
import aboutMePic from "../images/mePic.jpg"

export default function AboutMe(props){
    return(

        <section className={props.darkMode ? "darkMode" : ""} id="aboutMe">

            <article className="aboutMe">
                <div className="aboutMe--text">
                    <h2>
                        About me
                    </h2>
                    <p>
                    Formerly a lawyer (University of Buenos Aires), I discovered my passion for programming right before graduation. After graduating, I started learning by myself, and with the help of institutions such as Coderhouse and online resources like Scrimba and freeCodeCamp, among others. I'm looking for a new opportunity in this vast world that is the IT industry, and I plan on studying Computer Engineering at the University of Buenos Aires as soon as I get an opportunity.
                    </p>
                </div>
                <div className="aboutMe--img">
                    <img src={aboutMePic} alt="me placeholder"/>
                </div>

            </article>

        </section>
    )
}