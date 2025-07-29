import { useState, useEffect } from "react";
import logo from "../assets/logo_image-xs.png";

const Logo = () => (
  <img 
    src={logo}
    alt="Fernando Cruz logo"
  />
);

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`
        hidden md:flex fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-base-100 shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center h-16">
          <button
            onClick={scrollToTop}
            className="flex-shrink-0 hover:text-primary transition-colors focus:outline-none"
            aria-label="Scroll to top"
            type="button"
          >
            <Logo />
          </button>
          <div className="flex justify-center flex-grow gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-base-content hover:text-primary transition-colors"
              aria-label="Scroll to 'projects' section"
              type="button"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base-content hover:text-primary transition-colors"
              aria-label="Scroll to 'about' section"
              type="button"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base-content hover:text-primary transition-colors"
              aria-label="Scroll to 'contact' section"
              type="button"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
