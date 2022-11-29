import projectTwo from "../../images/Proyecto2-portfolio.png"
import projectThree from "../../images/Proyecto3-portfolio.png";
import projectFour from "../../images/Proyecto4-portfolio.png";
import projectFive from "../../images/Proyecto5-portfolio.png";

export default function Projects(){
    return(
        <section className="min-h-screen">
            <div className="p-3">
                <h2 className="text-3xl md:text-5xl text-center p-1"><strong>My projects</strong></h2>
                <p className="text-2xl md:text-3x1 text-center p-1.5">A selection of my work</p>
            </div>
            {/* PRIMER PROYECTO --- REFACTORIZAR */}
            <div className="h-96 md:h-80 p-3  mb-2">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row content-center justify-center mx-auto my-0 w-11/12   border border-solid border-gray-300 p-1 rounded-md  md:border-0">
                    <div className="md:w-2/4">
                        <a href="https://cfmstore-coderhouse.vercel.app" rel="to project one">
                            <img src={projectTwo} className="w-full shadow-2xl" alt="e-commerce project"/>

                        </a>
                    </div>
                    <div className="md:w-2/4 pt-3 md:p-3">
                        <h3 className="text-2xl md:text-3xl text-center p-1">E-Commerce Project</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Javascript, HTML, CSS3, Bootstrap 4</p>
                        <p className="text-base md:text-2xl text-justify p-1">Project built using the Fakestore API during the React course given by Coderhouse.</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}

            {/* SEGUNDO PROYECTO ---- REFACTORIZAR */}

            <div className="h-96 md:h-80 p-3  mb-2">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row-reverse content-center justify-center mx-auto my-0 w-11/12   border border-solid border-gray-300 p-1 rounded-md md:border-0">
                    <div className="md:w-2/4">
                        <a href="https://cfm-ygocardipedia.vercel.app" rel="to project two">
                            <img src={projectThree} className="w-full shadow-2xl" alt="card enciclopedia project"/>

                        </a>
                    </div>
                    <div className="md:w-2/4 pt-3 md:p-3">
                        <h3 className="text-2xl md:text-3xl text-center p-1">Yugioh Card Enciclopedia</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Javascript, HTML, CSS3.</p>
                        <p className="text-base md:text-2xl text-justify p-1">Project built using the YGOpro API. It serves as an enciclopedia to search for your favorite cards.</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}


            {/* TERCER PROYECTO ---- REFACTORIZAR */}
 
            <div className="h-96 md:h-80 p-3  mb-2">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row content-center justify-center mx-auto my-0 w-11/12   border border-solid border-gray-300 p-1 rounded-md  md:border-0">
                    <div className="md:w-2/4">
                        <a href="https://myfinanceapp.vercel.app" rel="to project three">
                            <img src={projectFour} className="w-full shadow-2xl" alt="finance app project"/>

                        </a>
                    </div>
                    <div className="md:w-2/4 pt-3 md:p-3">
                        <h3 className="text-2xl md:text-3xl text-center p-1">My Finance App</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Javascript, HTML, CSS3</p>
                        <p className="text-base md:text-2xl text-justify p-1">This project simulates a home economy app, in which you can add your incomes, spendings, savings, and get a balance.</p>
                    </div>
                </div>
            </div>

            {/* CUARTO  PROYECTO ---- REFACTORIZAR */}
            <div className="h-96 md:h-80 p-3  mb-4">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row-reverse content-center justify-center mx-auto my-0 w-11/12   border border-solid border-gray-300 p-1 rounded-md md:border-0">
                    <div className="md:w-2/4">
                        <a href="https://countries-explorer-cfm.vercel.app" rel="to project four">
                            <img src={projectFive} className="w-full shadow-2xl" alt="countries explorer project"/>
                        </a>
                    </div>
                    <div className="md:w-2/4 pt-3 md:p-3">
                        <h3 className="text-2xl md:text-3xl text-center p-1">Countries explorer</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Tailwind, Javascript, HTML</p>
                        <p className="text-base md:text-2xl text-justify p-1">Project built based on the frontendmentor.io challenge. You can search and filter countries and take a look at their main information.</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}

        </section>
    )
}