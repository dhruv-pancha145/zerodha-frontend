import React from "react";

function RightSection({
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
        <div className="col-6">
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
        </div>

        {/* Right - Content */}
        <div className="col-6 ps-5">
          <img src={imageURL} alt={productName} style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
