import React from "react"
import placeholder from "../images/placeholder.svg"

export default function Hero(props){

    const [heroIsClicked, setHeroIsClicked] = React.useState( false )
  
    const toggleHero = () =>{
      setHeroIsClicked(prevHero => !prevHero)
    }

    const heroText = () => {
        return(
            <div className="heroSection--text">

                <h1>
                    Fernando Cruz
                </h1>

                <h2>
                    Front End web developer. Former lawyer. Enthusiastic professional.
                </h2>

                <button className="heroButton" onClick={toggleHero}>
                    My presentation
                </button>

            </div>
        )
    }

    const heroVideo = () => {

        return(

            <div className="heroSection--img">
                <iframe 
                    src="https://www.youtube.com/embed/5u_Od_DoozU" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <button className="heroButton" onClick={toggleHero}>Back to title!</button>
            </div>

        )
    }

    const renderHero = () => {
        if (heroIsClicked === true){
            return heroVideo()
        }  else{
            return heroText()
        }
    }
    return(
        <section className={props.darkMode ?  "darkMode" : ""} id="hero">

            <div className="heroSection">

                {renderHero()}
                
            </div>

        </section>

    )
}