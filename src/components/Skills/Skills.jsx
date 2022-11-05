import html5Logo from "../../images/html5Logo.png";
import cssLogo from "../../images/cssLogo.png";
import javascriptLogo from "../../images/javascriptLogo.png";
import reactLogo from "../../images/reactLogo.png";
import gitLogo from "../../images/gitLogo.png";
import bootstrapLogo from "../../images/bootstrapLogo.png";
import tailwindLogo from "../../images/tailwind-css-Logo.png";
import sqlLogo from "../../images/sqlserverLogo.png";
import cSharpLogo from "../../images/c-sharpLogo.png";

export default function Skills(){
    return(
        <div className="min-h-screen">
            <div className="p-3">
                <h2 className="text-3xl md:text-5xl text-center p-1"><strong>My skills</strong></h2>
                <p className="text-2xl md:text-3x1 text-center p-1.5">What I can contribute to your company</p>
            </div>
            <div>
                <div className="my-0 mx-auto w-11/12   grid grid-cols-2 md:grid-cols-4 gap-1.5">
                    <div className="grid place-items-center p-5 h-40  shadow round">
                        <img src={html5Logo} alt="html" className="w-28"/>
                        <h5>HTML 5</h5>
                    </div>
                    <div className="grid place-items-center p-5 h-40  shadow round">                
                        <img src={cssLogo} alt="html" className="w-28"/>
                        <h5>CSS 3</h5>
                    </div>
                    <div className="grid place-items-center p-5 h-40  shadow round">                      
                        <img src={javascriptLogo} alt="html" className="w-28"/>
                        <h5>Javascript</h5>
                    </div>
                    <div className="grid place-items-center p-5 h-40  shadow round">
                        <img src={reactLogo} alt="html" className="w-28"/>
                        <h5>React</h5>
                    </div>
                    <div className="grid place-items-center p-5 h-40  shadow round">
                        <img src={gitLogo} alt="html" className="w-28"/>
                        <h5>Git</h5>
                    </div>
                    <div className="grid place-items-center p-5 h-40  shadow round">
                        <img src={bootstrapLogo} alt="html" className="w-28"/>
                        <h5>Bootstrap</h5>
                    </div>
                    <div className="grid place-items-center p-5 h-40  shadow round">
                        <img src={tailwindLogo} alt="html" className="w-28"/>
                        <h5>Tailwind</h5>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <h2 className="text-2xl md:text-4xl text-center p-1"><strong>Currently learning</strong></h2>
                <p className="text-xl md:text-3x1 text-center p-1.5">New skills that can contribute to the company</p>
            </div>
            <div className="my-0 mx-auto w-11/12   grid grid-cols-2 md:grid-cols-2 gap-1.5">
                <div className="grid place-items-center p-5 h-40  shadow round">
                    <img src={sqlLogo} alt="html" className="w-28"/>
                    <h5>SQL</h5>
                </div>
                <div className="grid place-items-center p-5 h-40  shadow round">                
                    <img src={cSharpLogo} alt="html" className="w-28"/>
                    <h5>C# .NET</h5>
                </div>
            </div>
        </div>
    )
}