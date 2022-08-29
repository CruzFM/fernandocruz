export default function ProjectElement(props){
    return (
      <div className="projectElement">
        <div className="projectElement--img">
          <a href={props.link}>
            <img
              src={props.projectImage}
              alt="projectPlaceOne"
              className="projectElement--img-pic"
            />
          </a>
        </div>

        <div className="projectElement--Description">
          <h4>{props.title}</h4>

          <p>{props.projectDescription}</p>

          {
            !props.technologies === true ?
            <p>Technologies to be used: React, Javascript, CSS3</p> :
            <p>Technologies used: {props.technologies}</p>
          }
        </div>
      </div>
    );
}