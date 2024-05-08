import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FontIcon() {
  return (
    <div className="icon-box flex">
      <a href="https://github.com/Ozyugoo" className="icon">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/stellaozioma" className="icon">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      
    </div>
  );
}

export default FontIcon;
