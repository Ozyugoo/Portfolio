import data from "../Info/data";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Project() {
  return (
    <>
      <div className="imgContainer" id="project">
        {data.map((item) => (
          <section className="itemContainer" key={item.id}>
            <section className="imgBox">
              <p className="idea">{item.idea}</p>
              <img src={item.image} alt={item.content} className="image" />
            </section>
            <section className="descContainer">
              <h3 className="content-title">{item.content}</h3>
              <p className="content-description">{item.description}</p>

              <section className="info">
                <h4 className="spaceTop">{item.info}</h4>
                <hr />
                <p className="spaceTop">
                  Year
                  <em className="float-right"> {item.year}</em>
                </p>
                <hr />
                <p className="spaceTop">
                  Role
                  <em className="float-right"> {item.role}</em>
                </p>
                <div className="fullView">
                  <p className="projectView">
                    <a href="http://" className="viewLink">
                      VIEW DEMO
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="icons"
                      />
                    </a>
                  </p>
                  <p className="projectView">
                    <a href="http://" className="viewLink">
                      VIEW ON GITHUB
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="icons"
                      />
                    </a>
                  </p>
                </div>
              </section>
            </section>
          </section>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Project;
