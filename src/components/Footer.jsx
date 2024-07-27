import Footerpic from"../assets/footerpic.png"
import Bigp from "../assets/bigp.png"
import Icon1 from"../assets/Iconawesome-discord.png"
import Icon2 from"../assets/redaacted.png"
import Icon3 from"../assets/Iconawesome-instagram.png"



function Footer(){
return(
    <>
    <div id="footer">
        <div className="container">
        <img src={Footerpic} alt="" className="pic"/>
        </div>
      
        <footer>
            <img src={Bigp} alt="" className="bigp"/>
            <div className="div">
                <h2>Follow us</h2>
                <img src={Icon1} alt="" />
                <img src={Icon2} alt="" />
                <img src={Icon3} alt="" />
            </div>
        </footer>
    </div>
    </>
);
}
export default Footer;