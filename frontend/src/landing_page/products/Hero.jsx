import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center mt-5 mb-10">
          <h1>Zerodha Products</h1>
          <h2 className="text-muted fs-5 mt-3">
            Sleek, modern, and intuitive trading platforms
          </h2>
          <p className="mt-3">
            Check out our{" "}
            <Link className="text-decoration-none" to={""}>
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Hero;
