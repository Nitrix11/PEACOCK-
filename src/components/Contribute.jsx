import Con from"../assets/contribute.png"
import Submit from"../assets/submit.png"
function Contribute(){
    return(
        <>
        <div id="contribute">
            <img src={Con} alt="" className="img"/>
            <p>
            Share your ideas on how to better the collective    
            </p>
            <textarea placeholder="Start typing"></textarea>
            <button>
            <img src={Submit} alt="" />
            </button>

        </div>
        </>
    );
}
export default Contribute;