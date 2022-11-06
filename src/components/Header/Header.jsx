//Hooks
import { useEffect, useState } from "react";

//Images
import sun from "../../images/sun.png";
import moon from "../../images/luna.png";
import hamburgerMenu from "../../images/hamburger-menu.png"
import closeMenu from "../../images/close-menu.png"


//components
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

export default function Header(props) {

  const [isMobile, setIsmobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const renderMobile = () => {
    if(isOpen === true ){
      return(
        <MobileNavbar closeNav={() => setIsOpen(false)} />
      )
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const openCloseNav = ()=>{
    if (isOpen === true){
      return(<img src={closeMenu} alt="Close Menu" className="w-5" />)
    } else{
      return( <img src={hamburgerMenu} alt="Open menu" className="w-5" />)
    }
  }

  return (
    <div className="px-2 sm:px-4 py-3.5 dark:bg-gray-900 2xl:bg-red-500 shadow-lg">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <span className="self-center md:text-xl font-semibold whitespace-nowrap dark:text-white sm:text-xs sm:whitespace-normal">
          <Link to="/">Fernando Cruz</Link>
        </span>
        {!isMobile && <DesktopNavbar />}
        {isMobile && (
          <>
            { renderMobile() }
            <div onClick={handleClick} className="dark:text-white text-black">
              {openCloseNav()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
