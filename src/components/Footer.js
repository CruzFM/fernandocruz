import React from "react"
import linkedinLogo from "../images/linkedinLogo.png"
import githubLogo from "../images/githubLogo.png"
import whatsappLogo from "../images/whatsappLogo.png"
import gmailLogo from "../images/gmailLogo.png"

export default function Footer(){
    return (
      <footer className="footer">
        <h2 className="footer--title"> Let's get in touch! </h2>
        <ul className="footer--elements">
          <li className="footer--elements_item">
            <h3>Linkedin</h3>
            <a href="https://www.linkedin.com/in/cruzfernandomartin/">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </li>

          <li className="footer--elements_item">
            <h3>Github</h3>
            <a href="https://github.com/CruzFM/">
              <img src={githubLogo} alt="Github" />
            </a>
          </li>

          <li className="footer--elements_item">
            <h3>WPP</h3>
            <a href="https://wa.me/5491137902453">
              <img src={whatsappLogo} alt="WhatsApp" />
            </a>
          </li>

          <li className="footer--elements_item">
            <h3>Gmail</h3>
            <a href="mailto:cruzfernandomartin94@gmail.com">
              <img src={gmailLogo} alt="Gmail" />
            </a>
          </li>
        </ul>
      </footer>
    );
}