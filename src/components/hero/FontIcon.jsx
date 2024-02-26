import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function FontIcon() {
  return (
    <div className='icon-box .col4'>
      <a href="https://github.com/Ozyugoo">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/stellaozioma">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
    </div>
  )
}

export default FontIcon
