import "./body.css";
import Hero from "../hero/Heros.jsx";
import Project from "./Project";
import About from "../about/AboutMe.jsx";
import Contact from "../contact/Contact.jsx";
 
function Body() {
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
      <section>
        <Contact />
        <hr />
      </section>

    </>
  )
}

export default Body
