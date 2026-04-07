import flipkart from '../images/flipkart.png';
import amazon from '../images/amazon.png';
import hero from '../images/shoe_image.png';
import '../../index.css';
const HeroSection = () => {
    return (
          <main className="hero" >
              <div className="hero-content">
                   <h1> YOUR FEET
                        DESERVE
                        THE BEST  </h1>
                  <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. </p>

                  <div className= "hero-btn">
                      <button>Shop Now</button>
                      <button>Category</button>
                  </div>
                  <div className = "hero-icon">
                      <p className= "available-text">Also Available On</p>
                      <img src={flipkart} />
                      <img src={amazon} />
                  </div>
                  <div className= "hero-img">
                       <img src={hero} />
                  </div>

              </div>
          </main>
    )
}

export default HeroSection;