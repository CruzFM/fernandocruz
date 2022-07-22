
export default function NavLinks(props) {

  return (
    <ul className="header--navbar_items">

      <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#hero">Home</a>
      </li>

      <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#projects">Projects</a>
      </li>

      <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#skills">Skills</a>
      </li>

      <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#aboutMe">About me</a>
      </li>

    </ul>
  );
}
