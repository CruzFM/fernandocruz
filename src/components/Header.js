import React from "react"
import sun from "../images/sun.png"
import moon from "../images/luna.png"

export default function Header(props){

    return (
        <header className={props.darkMode ? "header darkMode" : "header"}>
            <nav className="header--navbar">

                <div className="header--navbar_intro">
                    <button onClick={props.toggleDarkMode}>
                        
                        {props.darkMode ? 
                        <img src={moon} alt="dark mode" />
                        : <img src={sun} alt="light mode"/>}

                    </button>

                    <h3>
                        Fernando Cruz
                    </h3>
                </div>

                <ul className="header--navbar_items">
                    <li>
                       <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a> 
                    </li>

                    <li>
                        <a href="#aboutMe">About me</a>
                    </li>

                </ul>
            </nav>
        </header>
    )

}