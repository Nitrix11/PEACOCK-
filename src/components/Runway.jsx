import Run from "../assets/runway.png";
import White from "../assets/whitecircle.png";
import Red from "../assets/redcircle.png";
import Drop from "../assets/drop.png";
import Redacted from"../assets/Group32.png"
import Redacted2 from"../assets/Group32small.png"
function Runway() {
  return (
    <>
      <div id="runway">
        <img src={Run} alt=""  className="run"/>
        <div className="cards">
          <div className="card">
            <div className="cardpic">
              <img src={White} alt="" />
              <h2>Bon Voyage</h2>
            </div>
            <div className="cardtext">
              <div className="ptag">
                <p className="p1">
                  The Flock comes together
                      
                </p>
                  <div className="div">
<p className="p2">
Mint of the first{" "}
</p>
                  <img src={Drop} alt="" />
                  </div>
             
              
              </div>{" "}

           
           
            </div>
          </div>
          <div className="card">
            <div className="cardpic">
              <img src={Red} alt="" />
              <h2>Flying High</h2>
            </div>
            <div className="cardtext">
              <div className="ptag">
                <p className="p1">
                Access to utility unlocks<span><br/></span>
Tokenomics revealed <span><br/></span>Staking mechanism is live
                      
                </p>
                  <div className="div">
<p className="p2">
Second{" "}
</p>
                  <img src={Redacted} alt=""className="redacted" />
                  </div>
             
              
              </div>{" "}

           
           
            </div>
          </div>
          <div className="card">
            <div className="cardpic">
              <img src={White} alt="" />
              <h2>To the moon</h2>
            </div>
            <div className="cardtext">
              <div className="ptag">
                <p className="p1">
                Token transitions to a utility<span><br/></span> and governance token   
                </p>
                <p className="p3">
                  Acquisition of <span><img src={Redacted2} alt="" className="pic22"/> </span> started  
                </p>
                  <div className="div">
<p className="p2">
Final{" "}
</p>
                  <img src={Redacted2} alt="" />
                  </div>
             
              
              </div>{" "}

           
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Runway;
