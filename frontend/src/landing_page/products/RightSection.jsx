import React from "react";

function RightSection({ imageUrl, title, description, learnMoreLink }) {
  return (
    <div className="container mt-10">
      <div className="row">
        <div className="col-5 mt-5">
          <h2>{title}</h2>
          <p className="fs-5 mb-3 mt-3">{description}</p>
          <div className="mb-5 mt-5">
            <a className="text-decoration-none" href={learnMoreLink}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageUrl} alt="Kite" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
