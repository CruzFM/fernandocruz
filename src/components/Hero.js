import React from "react"
import placeholder from "../images/placeholder.svg"

export default function Hero(props){

    const [heroIsClicked, setHeroIsClicked] = React.useState( false )
    console.log(heroIsClicked)
  
    const toggleHero = () =>{
      setHeroIsClicked(prevHero => !prevHero)
      console.log(heroIsClicked)
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
                <img src={placeholder} alt="placeholder"/>
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

                {/* <div className="heroSection--text">

                    <h1>
                        Hello World!
                    </h1>

                    <h2>
                        I'm Fernando Cruz, a front end developer and former lawyer.
                    </h2>

                    <button onClick={props.toggleHero}>
                        Click me!
                    </button>
                </div> */}

                {/* <div className="heroSection--img">
                    <img src={placeholder} alt="placeholder"/>
                </div> */}

                
            </div>

        </section>

    )
}