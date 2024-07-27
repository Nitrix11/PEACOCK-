import Smallp from"../assets/smallp.png"
import Navpic from"../assets/navpic.png"

function Nav(){
    return(
        <>
        <nav>

    
        <img src={Smallp} alt=""  className="pic1"/>
        <a href="">
        <img src={Navpic} alt="" className="pic2" />
        </a>
        </nav>
       
        </>
    )
}
export default Nav;