import React from "react";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="container text-center mb-5">
      <div className="row">
        <h1 className="mt-5 mb-4">Technology</h1>
        <h2 className="fs-4  mb-3 text-muted">
          Sleek, modern and intutitive platforms
        </h2>
        <p className="text-muted">
          Check out our{" "}
        <Link to="/pricing" style={{ textDecoration: "none" }}>
  investment offering{" "}
  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
</Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
