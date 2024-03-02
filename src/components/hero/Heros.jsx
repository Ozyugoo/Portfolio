import myImage from '../../assets/Hero-image2.png'
import "./hero.css"
import FontIcon from './FontIcon'
import '../body/body.css'

function Hero() {
  
  return (
    <>
      <section className='hero-container col12'>
        <section className="self-intro col9">
          <h1 className="self col12">
            HI, I AM <br />STELLA UGOO-OKONKWO&middot;
          </h1>

          <p className="description col12">
            An ardent front-end developer specialized in building responsive website with regards to accessibility. I profer solutions to software development issues and I am passionate about creating a green digital product.
          </p>

          <section className="btn-container col12">
            <div className='bttn col10'>
              <p className='block'>For more information</p>
              <button className='btn'>
                Download Resume &nbsp; <em>&#x2022;</em>
              </button>
            </div>

            <div className='col2'>
              <FontIcon />
            </div>
          </section>
        </section>

        <section className='hero-img col3'>
          <img src={myImage} alt="My Image" className='myImage'/>
        </section>
      </section>

      <hr />
      
    </>
  )
}


export default Hero
