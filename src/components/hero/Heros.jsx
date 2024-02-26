import myImage from '../../assets/Hero-image (1).png'
import "./hero.css"
import FontIcon from './FontIcon'
import '../body/body.css'

function Hero() {
  
  return (
    <>
      <div className='hero-container'>
        <div className="self-intro .col6">
          <h1 className="self">
            Hello, I am Stella Ozioma Ugoo-Okonkwo&middot;
          </h1>

          <p className="description">
            An ardent front-end developer specialized in building responsive website with regards to accessibility. I profer solutions to software development issues and I am passionate about creating a green digital product.
          </p>

          <div className="btn-container">
            <div className='bttn'>
              <button>
                Download Resume &nbsp; <em>&#x2022;</em>
              </button>
            </div>

            <FontIcon />
          </div>
        </div>

        <div className='hero-img .col6'>
          <img src={myImage} alt="My Image" className='myImage'/>
        </div>
      </div>

      <hr />
      
    </>
  )
}


export default Hero
