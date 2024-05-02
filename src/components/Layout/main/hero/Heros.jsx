import myImage from "/src/assets/Hero-image2.png";
import "./hero.css";
import FontIcon from "./FontIcon";

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
            An ardent front-end developer specialized in building responsive
            website with regards to accessibility. I profer solutions to
            software development issues and I am passionate about creating a
            green digital product.
          </p>

          <section className="btn-container flex mb-4">
            <section className="bttn">
              <button className="btn">
                Download Resume&nbsp;<em>&#x2022;</em>
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
