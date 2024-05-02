import data from "../Info/data";
import "./project.css";

function Project() {
  return (
    <>
      <div className="imgContainer">
        {data.map((item) => (
          <section className="itemContainer lg:flex" key={item.id}>
            <section className="imgBox">
              <img src={item.image} alt={item.content} className="image" />
            </section>
            <section className="descContainer">
              <h3 className="content-title">{item.content}</h3>
              <p>{item.description}</p>
            </section>
          </section>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Project;
