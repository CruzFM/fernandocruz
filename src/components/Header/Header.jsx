//Hooks
import { useEffect, useState } from "react";

//Images
import sun from "../../images/sun.png";
import moon from "../../images/luna.png";

//components
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

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

  return (
    <div className=" border-gray-200 px-2 sm:px-4 py-3.5 dark:bg-gray-900 2xl:bg-red-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <span className="self-center md:text-xl font-semibold whitespace-nowrap dark:text-white sm:text-xs sm:whitespace-normal">
          Fernando Cruz
        </span>
        {!isMobile && <DesktopNavbar />}
        {isMobile && (
          <>
            { renderMobile() }
            <div onClick={handleClick} className="dark:text-white text-black">
              {isOpen ? "clickeado" : "falta"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
