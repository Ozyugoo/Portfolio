import github from "../../../../assets/github.png";
import linkedIn from "../../../../assets/linkedIn.png";

function FontIcon() {
  return (
    <div className="icon-box flex">
      <a href="https://github.com/Ozyugoo" className="icon">
        <img src={github} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/stellaozioma" className="icon">
        <img src={linkedIn} alt="" />
      </a>
    </div>
  );
}

export default FontIcon;
