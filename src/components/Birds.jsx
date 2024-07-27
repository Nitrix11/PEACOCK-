import Bird from"../assets/birds.png"
import Smallp from"../assets/smallp.png"
function  Birds(){
    return(
        <>
        <div id="birds">
            <img src={Bird} alt="" className="pic"/>
            <div className="cards">
              <div className="card">
                <div className="pictext">
                    <img src={Smallp} alt="" />
                    <div className="text">
                    <h1>John Doe</h1>
                    <p>
                    Founder & Curator
                    </p>
                    </div>
                  
                </div>
                </div>  
                <div className="card">
                <div className="pictext">
                    <img src={Smallp} alt="" />
                    <div className="text">
                    <h1>John Doe</h1>
                    <p>
                    Founder & Curator
                    </p>
                    </div>
                  
                </div>
                </div>  
                <div className="card">
                <div className="pictext">
                    <img src={Smallp} alt="" />
                    <div className="text">
                    <h1>John Doe</h1>
                    <p>
                    Founder & Curator
                    </p>
                    </div>
                  
                </div>
                </div>  
                <div className="card">
                <div className="pictext">
                    <img src={Smallp} alt="" />
                    <div className="text">
                    <h1>John Doe</h1>
                    <p>
                    Founder & Curator
                    </p>
                    </div>
                  
                </div>
                </div>  
                <div className="card">
                <div className="pictext">
                    <img src={Smallp} alt="" />
                    <div className="text">
                    <h1>John Doe</h1>
                    <p>
                    Founder & Curator
                    </p>
                    </div>
                  
                </div>
                </div>  
            </div>
        </div>
        </>
    );
}
export default Birds;