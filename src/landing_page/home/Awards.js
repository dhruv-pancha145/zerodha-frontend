import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left: Trophy image */}
        <div className="col-6 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt=""
            className="img-fluid"
          />
        </div>

        {/* Right: Text content */}
        <div className="col-6 p-4">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks &amp; IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            style={{ width: "85%" }}
            alt="Press logos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
