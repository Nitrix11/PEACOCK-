import SmallPeacock from "../assets/smallpeacock.png";

function About() {
  return (
    <>
      <div id="about">
        <h1>The <span> <img src={SmallPeacock} alt="" /></span> Collective</h1>
        <p>is just that - a collective.</p>
        <div className="ptag">
          <p className="p1 p1-1">
            A collective of early adopters and{" "}
            <span>
              <br />
            </span>{" "}
            innovators to create a brand and a{" "}
            <span>
              <br />
            </span>
            community.
          </p>

          <p className="p1">
            The Metaverse is a space of infinite{" "}
            <span>
              <br />
            </span>
            opportunities and the best way to{" "}
            <span>
              <br />
            </span>
            navigate it, is together.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
