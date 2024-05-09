import FontIcon from "../../main/hero/FontIcon";
import MyButton from "./Button";
import "./contact.css";
import Resume from "../../../../assets/document/StellaUgoo-Okonkwo_CV.pdf"

function Contact() {
  return (
    <>
      <section className="contactContainer" id="contact">
        <section className="connect">
          <h2 className="headConnect">Let&#39;s Connect</h2>
          <p>
            Say hello at{" "}
            <a
              href="mailto:stellaoziomaug@gmail.com"
              className="text-customYellow"
            >
              stellaoziomaug@gmail.com
            </a>
          </p>
          <p>
            For more info, here&#39;s my <a href={Resume} className="CV">resume</a>
          </p>
          <FontIcon />
        </section>
        <section className="formContainer">
          <form action="" method="post">
            <label htmlFor="names">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email" required>
              Email
            </label>
            <input type="email" name="email" id="email" />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
            <label htmlFor="names">Message</label>
            <textarea name="textarea" id="" cols="30" rows="10"></textarea>
            <div className="btns">
              <MyButton />
            </div>
          </form>
        </section>
      </section>
      <div className="copy">
        <p>&copy; 2024 Stella Ugoo-Okonkwo</p>
      </div>
    </>
  );
}

export default Contact;
