import { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./scrollToTop.css"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="angleUp">
      {isVisible && (
        <button onClick={scrollToTop} className="scrollProperty">
          <FontAwesomeIcon icon={faAnglesUp} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop
