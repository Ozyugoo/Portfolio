import About from "./AboutMe"
import FontIcon from "../hero/FontIcon"

function MoreAbout() {
  return (
    <>
      <div>
        <section>
            <About />
        </section>
        <section>
            <div>
                <button className='btn'>
                    Download Resume &nbsp; <em>&#x2022;</em>
                </button>
            </div>

            <div className='col2'>
              <FontIcon />
            </div>
        </section>
      </div>
      <div>
        <section>
            <div>
            <h3>My CAPABILITIES</h3>
            </div>

            <div>
                <p>I am always looking to add more skills to my tools, so far these are the skills that I can work with.</p>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>BOOTSTRAP</li>
                    <li>TAILWIND</li>
                    <li>REACT</li>
                </ul>
            </div>
        </section>

        <section>
            <div>
                <h3>MY EXPERIENCE</h3>
            </div>
            <div>
                {/* more about my experiences */}
            </div>
        </section>
      </div>
    </>
  )
}

export default MoreAbout
