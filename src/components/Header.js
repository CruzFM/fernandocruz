//Components

import Navigation from "./navBar/Navigation"
import MobileNavigation from "./navBar/MobileNavigation"

//Hooks
import { useState } from 'react'

//Images
import sun from "../images/sun.png"
import moon from "../images/luna.png"

export default function Header(props){

    const [navbarOpen, setNavbarOpen] = useState(false)

    const toggleNavmenu = () =>{
        setNavbarOpen(prevNavbarOpen => !prevNavbarOpen)
    }

    return (
      <header className={props.darkMode ? "header darkMode" : "header"}>

        <div className="header--intro">
          <button onClick={props.toggleDarkMode}>
            {props.darkMode ? (
              <img src={moon} alt="dark mode" />
            ) : (
              <img src={sun} alt="light mode" />
            )}
          </button>

          {/* <h3>
                        Fernando Cruz
                    </h3> */}
        </div>

        {/* <nav
          className="header--navbar"
        > */}
            <Navigation />
            <MobileNavigation />
          {/* <button onClick={toggleNavmenu}>
            {navbarOpen ? "Open" : "Close"}
          </button>

          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <a href="#hero">Home</a>
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
          </ul> */}

        {/* </nav> */}
      </header>
    );

}