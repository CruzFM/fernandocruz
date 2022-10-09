//Styles
import './header.css'

//Components
import Navigation from "./navBar/Navigation";
import MobileNavigation from "./navBar/MobileNavigation";

//Images
import sun from "../../images/sun.png";
import moon from "../../images/luna.png";

export default function Header(props){

    return (
      <header className={props.darkMode ? "header darkMode" : "header"}>
        <div className="darkModeIcons">
          <button onClick={props.toggleDarkMode}>
            {props.darkMode ? (
              <img src={moon} alt="dark mode" />
            ) : (
              <img src={sun} alt="light mode" />
            )}
          </button>
        </div>
        <Navigation />
        {/* <MobileNavigation /> */}
      </header>
    );

};