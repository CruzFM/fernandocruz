import React from "react";
import html5Logo from "../images/html5Logo.png";
import cssLogo from "../images/cssLogo.png";
import javascriptLogo from "../images/javascriptLogo.png";
import reactLogo from "../images/reactLogo.png";
import gitLogo from "../images/gitLogo.png";
import javaLogo from "../images/javaLogo.png";
import sqlLogo from "../images/sqlserverLogo.png";

export default function Skills(props){
    return(
        <section className={props.darkMode ? "darkMode" : ""} id="skills">

            <article className="skills" >
                <h2 className="skills--title">
                    These are my skills
                </h2>
                <ul className="skills--elements">

                    <li className="skills--elements_item">
                        <h5>HTML 5</h5>
                        <img src={html5Logo} alt="HTML5"/>
                    </li>

                    <li className="skills--elements_item">
                        <h5>CSS 3</h5>
                        <img src={cssLogo} alt="CSS3" />
                    </li>

                    <li className="skills--elements_item">
                        <h5>Javascript</h5>
                        <img src={javascriptLogo} alt="Javascript"/>
                    </li>

                    <li className="skills--elements_item">
                        <h5>React</h5>
                        <img src={reactLogo} alt="React"/>
                    </li>

                    <li className="skills--elements_item">
                        <h5>Git</h5>
                        <img src={gitLogo} alt="Git" />
                    </li>

                    <li className="skills--elements_item">
                        <h5>Java</h5>
                        <img src={javaLogo} alt="Java"/>
                    </li>

                    <li className="skills--elements_item">
                        <h5>SQL</h5>
                        <img src={sqlLogo} alt="SQL"/>
                    </li>
                </ul>
            </article>

        </section>

    );
};