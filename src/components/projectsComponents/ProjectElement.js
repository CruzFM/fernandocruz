export default function ProjectElement(props){
    return(
        <div className="projectElement">
            
            <div className="projectElement--img">
                <a href={props.link}>

                    <img src={props.projectPlaceholder} 
                        alt="projectPlaceOne" 
                        className="projectElement--img-pic"
                        // className="projects--one_img"
                    />
                </a>

            </div>

            <div className="projectElement--Description">
                <h4>
                    {props.title}
                </h4>

                <p>
                    {props.projectDescription}
                </p>

                <p>
                    Technologies used: {props.techologies}
                </p>
            </div>

        </div>
    )
}