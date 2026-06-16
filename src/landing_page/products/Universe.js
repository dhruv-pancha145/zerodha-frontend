import React from "react";
import { Link } from "react-router-dom";


function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-4 p-3 mt-5">
          <div style={imgContainer}>
            <img src="media/images/smallcaseLogo.png" style={imgStyle} alt="Partner 1"  />
          </div>
          <p className="text-muted mt-2">Thematic investment platform</p>
        </div>

        {/* Streak */}
        <div className="col-4 p-3 mt-5">
          <div style={imgContainer}>
            <img src="media/images/streakLogo.png" style={imgStyle} alt="Partner 2" />
          </div>
          <p className="text-muted mt-2">Algo & strategy platform</p>
        </div>

        {/* Sensibull */}
        <div className="col-4 p-3 mt-5">
          <div style={imgContainer}>
            <img src="media/images/sensibullLogo.svg" style={imgStyle} alt="Partner 3" />
          </div>
          <p className="text-muted mt-2">Options trading platform</p>
        </div>

        {/* Zerodha Fund House */}
        <div className="col-4 p-3 mt-5">
          <div style={imgContainer}>
            <img src="media/images/zerodhaFundhouse.png" style={imgStyle} alt="Partner 4" />
          </div>
          <p className="text-muted mt-2">Asset management</p>
        </div>

        {/* GoldenPi */}
        <div className="col-4 p-3 mt-5">
          <div style={imgContainer}>
            <img src="media/images/goldenpiLogo.png" style={imgStyle} alt="Partner 5" />
          </div>
          <p className="text-muted mt-2">Bonds trading platform</p>
        </div>

        {/* Ditto */}
        <div className="col-4 p-3 mt-5">
          <div style={imgContainer}>
            <img src="media/images/dittoLogo.png" style={imgStyle} alt="Partner 6" />
          </div>
          <p className="text-muted mt-2">Insurance</p>
        </div>

       <Link to="/signup" style={{ width: "15%", margin: "20px auto" }}>
  <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{ width: "100%" }}>
    Signup Now
  </button>
</Link>
      </div>
    </div>
  );
}

// Har image ka container same height ka hoga
const imgContainer = {
  height: "80px", // fixed height
  display: "flex",
  alignItems: "center", // vertically center
  justifyContent: "center", // horizontally center
};

//Image apne aap fit ho jayegi container mein
const imgStyle = {
  maxHeight: "100%", // container se badi nahi hogi
  maxWidth: "100%", // container se wide nahi hogi
  objectFit: "contain",
};

export default Universe;
