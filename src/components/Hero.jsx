import Peacock from"../assets/peacock.png"
import Rectangle from"../assets/Rectangle.png"

function Hero(){
    return(
        <>
        <div id="hero">

  
        <h1>
            The <span><img src={Peacock} alt=""/></span>Collective
        </h1>
        <a href="#">
        <p>Join the Flock </p>
        </a>
      
        <div className="discover">
            <a href="#">
            <h2>
                discover
            </h2>
                </a>
            <img src={Rectangle} alt="" />
        </div>
        </div>
        </>
    )
}
export default Hero;