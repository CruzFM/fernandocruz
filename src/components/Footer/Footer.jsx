import github from "../../images/githubLogo.png";
import linkedIn from "../../images/linkedinLogo.png";
import gmail from "../../images/gmailLogo.png";


export const Footer = ()=>{
    return(
        <footer className="h-36 bg-gray-900 text-white">
            <div className="mx-auto my-0 w-11/12 flex flex-col content-center gap-2">
                <div>
                    <h2 className="text-center text-xl font-medium py-1">Let's get in touch!</h2>
                </div>
                {/* <a href="mailto:cruzfernandomartin94@gmail.com" className="text-center p-2 text-sm">
                    cruzfernandomartin94@gmail.com
                </a> */}
                <ul className="list-none grid grid-cols-3">
                    <li className="grid place-items-center">
                        <a href="https://github.com/CruzFM">
                            <img src={github} className="w-7 md:w-10" alt="github" />
                        </a>
                        <p>Github</p>
                    </li>
                    <li className="grid place-items-center">
                        <a href="https://linkedin.com/in/cruzfernandomartin">
                            <img src={linkedIn} className="w-7 md:w-10" alt="LinkedIn" />
                        </a>
                        <p>LinkedIn</p>
                    </li>
                    <li className="grid place-items-center">
                        <a href="mailto:cruzfernandomartin94@gmail.com">
                            <img src={gmail} className="w-7 md:w-10" alt="gmail" />
                        </a>
                        <p>Gmail</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}