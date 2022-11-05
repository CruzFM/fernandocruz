import projectTwo from "../../images/Proyecto2-portfolio.png"

export default function Projects(){
    return(
        <section className="min-h-screen">
            <div className="p-3">
                <h2 className="text-3xl md:text-5xl text-center p-1"><strong>My projects</strong></h2>
                <p className="text-2xl md:text-3x1 text-center p-1.5">A selection of my work</p>
            </div>
            <div className="border border-solid border-black h-96 bg-green-100 ">
                <div className=" h-96 flex flex-col md:flex-row content-center justify-center mx-auto my-0 w-11/12">
                    <img src={projectTwo} className="" alt="e-commerce project"/>

                </div>
            </div>
            <div className="border border-solid border-black h-screen bg-blue-300">
                <p>Hola Fer</p>
                <h2>sigamos intentando</h2>
            </div>
            <div className="border border-solid border-black h-screen bg-purple-700">
                <p>Hola Fer</p>
                <h2>sigamos intentando</h2>
            </div>
        </section>
    )
}