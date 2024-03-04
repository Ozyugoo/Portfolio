import "./main.css";
import Hero from "./hero/Heros.jsx";
import Project from "./Project.jsx";
import About from "./about/AboutMe.jsx";
 
function Main() {
  return (
    <> 
      <div>
        <Hero />
      </div>
      <div>
        <section>
          <h2>Featured Projects</h2>
          <p>Here are some of the selected projects that showcase my work and passion for front-end development.</p>
        </section>
      </div>      
      <section>
        <Project />
      </section>
     
      <section>
        <About />
      <hr />
      </section>
    </>
  )
}

export default Main
