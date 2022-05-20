import React from "react"
import sun from "../images/sun.png"

export default function Header(){

    return (
        <header className="header">
            <nav className="header--navbar">
                <div className="header--navbar_intro">
                    <button>
                        <img src={sun} alt="dark mode"/>
                    </button>

                    <h3>
                        Fernando Cruz
                    </h3>
                </div>

                <ul className="header--navbar_items">
                    <li>
                       <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">Projects</a>
                    </li>

                    <li>
                        <a href="#">Skills</a> 
                    </li>

                    <li>
                        <a href="#">About me</a>
                    </li>

                </ul>
            </nav>
        </header>
    )

}