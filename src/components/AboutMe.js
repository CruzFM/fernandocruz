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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores harum eos! Sapiente velit totam laborum sunt eum temporibus aliquid. Aliquam consequuntur vitae vero recusandae consectetur optio mollitia aperiam.
                    </p>
                </div>
                <div className="aboutMe--img">
                    <img src={aboutMePic} alt="me placeholder"/>
                </div>

            </article>

        </section>
    )
}