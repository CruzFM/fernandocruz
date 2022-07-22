
import NavLinks from "./NavLinks"

import { CgMenuRound } from 'react-icons/cg'
import { CgCloseO } from 'react-icons/cg'
import { useState } from 'react'


export default function MobileNavigation(){

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = ()=> {
        setMenuOpen( prevMenu => !prevMenu)
    }

    const openIcon = <CgMenuRound 
                    className="hamburgerMenu" 
                    size='40px' 
                    color='white' 
                    onClick={handleMenu}
                    />

    const closeIcon = <CgCloseO
                    className="hamburgerMenu" 
                    size='40px' 
                    color='white' 
                    onClick={handleMenu}
                    />

    const closeMobileMenu= ()=> setMenuOpen(false)

    return(
        <nav className="header--navbar mobileNavigation">
            {menuOpen ? closeIcon : openIcon}
            {menuOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
}