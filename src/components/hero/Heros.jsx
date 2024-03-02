import myImage from '../../assets/Hero-image2.png'
import "./hero.css"
import FontIcon from './FontIcon'
import '../body/body.css'

function Hero() {
  
  return (
    <>
      <div className='hero-container col12'>
        <section className="self-intro col6">
          <h1 className="self col12">
            Hi, I am Stella <br /> Ugoo-Okonkwo&middot;
          </h1>

          <p className="description col12">
            An ardent front-end developer specialized in building responsive website with regards to accessibility. I profer solutions to software development issues and I am passionate about creating a green digital product.
          </p>

          <section className="btn-container col12">
            <div className='bttn col6'>
              <button className='col12'>
                Download Resume &nbsp; <em>&#x2022;</em>
              </button>
            </div>

            <div className='col6'>
              <FontIcon />
            </div>
          </section>
        </section>

        <div className='hero-img col6'>
          <img src={myImage} alt="My Image" className='myImage'/>
        </div>
      </div>

      <hr />
      
    </>
  )
}


export default Hero
