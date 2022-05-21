import React from "react"
import html5Logo from "../images/html5Logo.png"
import cssLogo from "../images/cssLogo.png"
import javascriptLogo from "../images/javascriptLogo.png"
import reactLogo from "../images/reactLogo.png"
import gitLogo from "../images/gitLogo.png"
import javaLogo from "../images/javaLogo.png"
import sqlLogo from "../images/sqlserverLogo.png"

export default function Skills(){
    return(
        <section className="container-skills">

            <article className="skills">
                <h2>
                    These are my skills
                </h2>
                <ul>

                    <li>
                        <h4>HTML 5</h4>
                        <img src={html5Logo} alt="HTML5"/>
                    </li>

                    <li>
                        <h4>CSS 3</h4>
                        <img src={cssLogo} alt="CSS3" />
                    </li>

                    <li>
                        <h4>Javascript ES6</h4>
                        <img src={javascriptLogo} alt="Javascript"/>
                    </li>

                    <li>
                        <h4>React</h4>
                        <img src={reactLogo} alt="React"/>
                    </li>

                    <li>
                        <h4>Git</h4>
                        <img src={gitLogo} alt="Git" />
                    </li>
                    <li>
                        <h4>Java</h4>
                        <img src={javaLogo} alt="Java"/>
                    </li>
                    <li>
                        <h4>SQL Server</h4>
                        <img src={sqlLogo} alt="SQL"/>
                    </li>
                </ul>
            </article>

        </section>

    )
}