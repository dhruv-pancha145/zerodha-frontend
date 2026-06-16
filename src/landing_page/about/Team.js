import React from "react";
import { Link } from 'react-router-dom';


function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-2 text-center mt-3">People</h1>
        <div className="row">
          <div className="col-6 p-5 text-center">
            <img
              src="media/images/Dhruvimage.jpg"
              style={{ borderRadius: "100%", width: "50%" }}
              alt="Team member"
            />
            <h2 className="fs-5  text-mutted mt-5 text-muted">Nithin Kamath</h2>
            <h3 className="fs-6  text-mutted text-muted">Founder, CEO</h3>
          </div>
          <div className="col-6  p-5 mt-3 text-mutted">
            <p className="" style={{ lineHeight: "1.8", fontSize: "1em" }}>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
  Connect on{" "}
  {/* <a href="https://zerodha.com" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
    Homepage
  </a>{" "} */}
  <Link to="/" style={{ textDecoration: "none" }}>
  Homepage
</Link>

  /{" "}
  <a href="https://tradingqna.com" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
    TradingQnA
  </a>{" "}
  /{" "}
  <a href="https://twitter.com/zerodhaonline" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
    Twitter
  </a>
</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
