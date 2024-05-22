import "./certificate.css";

function Certificate() {
  return (
    <>
      <section className="certContainer">
        <section className="capHead">
          <h2 className="capHeading">MY CERTIFICATES</h2>
        </section>
        <section className="certBody">
          <section className="listBox">
            <ul className="certList">
              <li className="list">ALX Frontend SE</li>
              <li className="list">Tech4dev Frontend SE</li>
              <li className="list">freeCodeCamp HTML & CSS</li>
              <li className="list">Coursera HTML & CSS</li>

              <li className="list">Coursera GIT & GITHUB</li>
              <li className="list">Coursera Programming in JS</li>
              <li className="list">COursera React Basics</li>
              <li className="list">Udemy JS</li>
            </ul>
          </section>
        </section>
      </section>
      <hr />
    </>
  );
}

export default Certificate;
