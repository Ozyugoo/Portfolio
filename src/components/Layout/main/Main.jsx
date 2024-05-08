import "./main.css";
import Project from "./projects/Project.jsx";
import Hero from "./hero/Heros.jsx";

function Main() {
  return (
    <>
      <main className="main">
        <section>
          <section>
            <Hero />
          </section>
          <section>
            <h2 className=" featured">FEATURED PROJECTS</h2>
            <p className="my-4">
              Here are some of the selected projects that showcase my work and
              passion for front-end development.
            </p>
          </section>
        </section>

        <section>
          <Project  />
        </section>
      </main>
    </>
  );
}

export default Main;
