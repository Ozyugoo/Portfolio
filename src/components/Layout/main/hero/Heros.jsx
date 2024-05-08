import myImage from "/src/assets/Hero-image2.png";
import "./hero.css";
import FontIcon from "./FontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <section className="self-intro">
          <h1 className="self">
            HI, I AM STELLA <br />
            UGOO-OKONKWO&nbsp;&middot;
          </h1>

          <p className="description">
            I thrive on bringing creativity and functionality to the forefront
            of every project, with fervent commitment to crafting sustainable,
            eco-conscious digital products.
          </p>

          <section className="btn-container">
            <section className="bttn">
              <button className="btn">
                Download Resume&nbsp;
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </section>

            <div className="icon-btn">
              <FontIcon />
            </div>
          </section>
        </section>

        <section className="hero-img">
          <div>
            <img src={myImage} alt="My Image" className="myImage" />
          </div>
        </section>
      </section>

      <hr />
    </>
  );
}

export default Hero;
