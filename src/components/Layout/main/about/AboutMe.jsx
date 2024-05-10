import Image from "../../../../assets/IMG-bg.png"
import "./about.css";
import ResumeButton from "./ResumeButton.jsx";
import FontIcon from "../hero/FontIcon.jsx";
import Capabilities from "../strength/Capabilities.jsx";
import Experience from "../strength/Experience.jsx";

function AboutMe() {
  return (
    <>
      <section className="selfie">
        <img
          src={Image}
          alt="My Image"
        />
      </section>
      <section className="aboutContainer" id="about">
        <section className="aboutHeading">
          <h2 className="aboutMe">About Me</h2>
        </section>

        <section className="aboutDesc">
          <p className="about">
            I am a front-end developer based in Nigeria. I have background in
            Science Laboratory Technology.
          </p>

          <p className="aboutBody">
            I am a passionate front-end developer actively seeking exciting
            opportunities to apply my skills. Grounded in the artistry of
            front-end development, I specialize in crafting responsive websites
            with a strong emphasis on accessibility. My approach is marked by a
            keen eye for detail and a knack for problem-solving, enabling me to
            adeptly tackle software development challenges.
            <p>
              I thrive on challenges and have recently begun integrating
              considerations for carbon emissions into my development process,
              reflecting my commitment to sustainability. I am deeply curious
              and driven by a genuine passion for problem-solving. Currently, I
              am expanding my expertise in React.js, exploring Webflow, and
              delving into design principles.
            </p>
            <p>
              When I&#39;m not immersed in programming, you can find me enjoying
              a jog or spending quality time with my family. I am dedicated to
              continuous learning and strive to enhance my skills with each new
              endeavor.
            </p>
          </p>
          <div className="flexIcon">
            <ResumeButton />
            <FontIcon />
          </div>
        </section>
      </section>
      <hr />
      <section>
        <Capabilities />
      </section>
      <section>
        <Experience />
      </section>
    </>
  );
}

export default AboutMe;
