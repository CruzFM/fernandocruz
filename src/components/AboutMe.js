import checked from "../images/check.png";
import rocket from "../images/Rocket.png";
import hobbies from "../images/hobbies.png";

export default function AboutMe(props) {
  return (
    <section className={props.darkMode ? "darkMode" : ""} id="aboutMe">
      <article className="aboutMe">
        <h2>About me</h2>

        <div className="aboutMe--elements">
          <div className="aboutMe--elements_item">
            <div className="aboutMe--elements_item-title">
              <img src={hobbies} alt="education" />
              <h3>Hobbies</h3>
            </div>
            <div>
              <p>I like reading books, excercising and playing music.</p>
              <br />
            </div>
          </div>

          <div className="aboutMe--elements_item">
            <div className="aboutMe--elements_item-title">
              <img src={checked} alt="checked" />
              <h3> Current Job</h3>
            </div>
            <div>
              <p>Legal advisor of the Government of Buenos Aires.</p>
              <br />
            </div>
          </div>

          <div className="aboutMe--elements_item">
            <div className="aboutMe--elements_item-title">
              <img src={rocket} alt="rocket" />
              <h3> Looking for</h3>
            </div>
            <div>
              <p>
                Challenging projects in a company where team work and growth are
                the main focus.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
