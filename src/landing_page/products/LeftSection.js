import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <hr />
        {/* Left - Image */}
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ width: "90%" }} />
        </div>

        {/* Right - Content */}
        <div className="col-6 ps-5">
          <h2 style={{ fontWeight: "600", marginBottom: "15px" }}>
            {productName}
          </h2>

          <p
            className="text-muted"
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            {productDescription}
          </p>

          {/* Links */}
          <div className="mb-4">
            <a
              href={tryDemo}
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "15px",
                marginRight: "40px",
              }}
            >
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>{" "}
            {/*fixed closing tag */}
          </div>

          {/* App Store Badges */}
          <div className="d-flex align-items-center gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
