import myImage from "/src/assets/Hero-image2.png";
import "./hero.css";
import FontIcon from "./FontIcon";
import dotArrow from "../../../../assets/dotArrow.png";
import Resume from "../../../../assets/document/StellaUgoo-Okonkwo_CV.pdf";

function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "StellaUgoo-Okonkwo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
              <button className="btn" onClick={handleDownload}>
                <p className="btnDload">Download Resume&nbsp;</p>
                <img src={dotArrow} alt="" />
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
