import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row mt-5 border-bottom ">
        <div className="col-4 mt-5 p-4 text-center">
          <img src="media/images/pricing0.svg" alt="Pricing" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equilty delivery investment (NSE,BSE),
            <br /> are absolutely free - ₹0 brokerage
          </p>
        </div>
        <div className="col-4 mt-5 p-4 text-center">
          <img src="media/images/intradayTrades.svg" alt="Pricing" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.0035 (Whichever is lower)
            <br />
            per executed order on intraday trades
            <br />
            across equilty. Currency and commodity
            <br />
            trades
          </p>
        </div>
        <div className="col-4 mt-5 p-4 text-center">
          <img src="media/images/pricing0.svg"  alt="Pricing" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            {" "}
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
