import Navbar from "../navbar/Navbar";
import "./comingSoon.scss";

const ComingSoon = () => {
  return (
    <><Navbar />
    
    <div className="comingSoon">
      <div className="wrapper">
        <h1>
          coming soon<span className="dot">.</span>
        </h1>
        <p>Appologies for keeping you waiting......</p>
        <div className="icons">
          {/* <a href="">
            <i className="fa fa-twitter" />
          </a>
          <a href="">
            <i className="fa fa-youtube-play" />
          </a>
          <a href="">
            <i className="fa fa-paper-plane" />
          </a> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default ComingSoon;
