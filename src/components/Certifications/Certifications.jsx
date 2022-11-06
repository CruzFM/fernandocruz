import projectUnderConstruction from "../../images/projectUnderConstruction.svg"

export const Certifications = ()=>{
    return(
        <div className="flex justify-center content-center min-h-screen my-0 mx-auto w-11/12">
            <div className="grid place-items-center h-3/6 p-3">
                <img src={projectUnderConstruction} alt="Under Construction" className="w-full"/>
                <h2 className="text-center">Page under construction. I apologize for the inconvenients.</h2>
            </div>
            
        </div>
    )
}