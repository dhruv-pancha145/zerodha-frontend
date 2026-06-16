import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5">
          <img
            src="media\images\education.svg"
            style={{ width: "75%" }}
            alt="Education Image"
            className="mb-5"
          />
        </div>
        <div className="col-6 mt-5">
          <h1 className="fs-2">
            <b>Free and open market education</b>
          </h1>
          <div className="mt-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading
            </p>
            <a href="https://varsity.zerodha.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <div className="mt-5 mb-5">
              <p>
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="https://tradingqna.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                TradingQ&A{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;