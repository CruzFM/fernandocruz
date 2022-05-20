import React from "react"
import placeholder from "../images/placeholder.svg"

export default function Hero(){
    return(
        <section className="heroSection">
            <div className="heroSection--text">
                <h1>
                    Hello World!
                </h1>
                <h2>
                    I'm Fernando Cruz, a front end deveolper and former lawyer.
                </h2>
            </div>
            <div className="heroSection--img">
                <img src={placeholder} alt="placeholder"/>
            </div>
        </section>
    )
}