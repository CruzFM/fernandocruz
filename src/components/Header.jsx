import { useState, useEffect } from "react";

function useViewportWidth(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

function Header(){
    const width = useViewportWidth();

    return(
        <>
            {width > 750 && <div>soy el header</div>}
        </>
    );
}

export default Header;