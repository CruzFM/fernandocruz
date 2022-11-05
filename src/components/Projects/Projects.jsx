import projectTwo from "../../images/Proyecto2-portfolio.png"
import projectThree from "../../images/Proyecto3-portfolio.png";

export default function Projects(){
    return(
        <section className="min-h-screen">
            <div className="p-3">
                <h2 className="text-3xl md:text-5xl text-center p-1"><strong>My projects</strong></h2>
                <p className="text-2xl md:text-3x1 text-center p-1.5">A selection of my work</p>
            </div>
            {/* PRIMER PROYECTO --- REFACTORIZAR */}
            <div className="h-96 md:h-80 p-3  mb-2">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row content-center justify-center mx-auto my-0 w-11/12   border border-solid border-black p-1 rounded-md  md:border-0">
                    <div className="md:w-2/4">
                        <a href="google.com" rel="to project one">
                            <img src={projectTwo} className="w-full shadow-2xl" alt="e-commerce project"/>

                        </a>
                    </div>
                    <div className="md:w-2/4 md:p-2">
                        <h3 className="text-2xl md:text-3xl text-center p-1">E-Commerce Project</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Javascript, HTML, CSS3, Bootstrap 4</p>
                        <p className="text-base md:text-2xl text-justify p-1">Project built using the Fakestore API during the React course given by Coderhouse.</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}

            {/* SEGUNDO PROYECTO ---- REFACTORIZAR */}

            <div className="h-96 md:h-80 p-3  mb-2">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row-reverse content-center justify-center mx-auto my-0 w-11/12   border border-solid border-black p-1 rounded-md md:border-0">
                    <div className="md:w-2/4">
                        <a href="google.com" rel="to project one">
                            <img src={projectThree} className="w-full shadow-2xl" alt="e-commerce project"/>

                        </a>
                    </div>
                    <div className="md:w-2/4 md:p-2">
                        <h3 className="text-2xl md:text-3xl text-center p-1">Yugioh Card Enciclopedia</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Javascript, HTML, CSS3.</p>
                        <p className="text-base md:text-2xl text-justify p-1">Project built using the YGOpro API. It serves as an enciclopedia to search for your favorite cards.</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}


            {/* SEGUNDO PROYECTO ---- REFACTORIZAR */}
 
            <div className="h-96 md:h-80 p-3  mb-2">
                <div className=" h-96 md:h-80 flex flex-col md:flex-row content-center justify-center mx-auto my-0 w-11/12   border border-solid border-black p-1 rounded-md  md:border-0">
                    <div className="md:w-2/4">
                        <a href="google.com" rel="to project one">
                            <img src={projectTwo} className="w-full shadow-2xl" alt="e-commerce project"/>

                        </a>
                    </div>
                    <div className="md:w-2/4 md:p-2">
                        <h3 className="text-2xl md:text-3xl text-center p-1">My Finance App</h3>
                        <p className="text-base md:text-2xl text-justify p-1">Stack: React, Javascript, HTML, CSS3</p>
                        <p className="text-base md:text-2xl text-justify p-1">This project simulates a home economy app, in which you can add your incomes, spendings, savings, and get a balance.</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}

        </section>
    )
}