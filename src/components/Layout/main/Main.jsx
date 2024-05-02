import "./main.css";
import Hero from "./hero/Heros.jsx";
import Project from "./projects/Project.jsx";
import About from "./about/AboutMe.jsx";

function Main() {
  return (
    <>
      <main className="main">
        <section>
          <Hero />
        </section>
        <section>
          <section>
            <h2 className="my-6 text-3xl font-bold">FEATURED PROJECTS</h2>
            <p className="my-4">
              Here are some of the selected projects that showcase my work and
              passion for front-end development.
            </p>
          </section>
        </section>
        <section>
          <Project />
        </section>

        <section>
          <About />
          <hr />
        </section>
      </main>
    </>
  );
}

export default Main;
