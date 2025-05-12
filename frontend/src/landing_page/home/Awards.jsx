import React from "react";

function Awards() {
  return (
    <div className="container mb-10">
      <div className="row">
        <img
          className="col-6"
          src="public/media/images/largestBroker.svg"
          alt="Largest Brocker"
        />
        <div className="col-6 my-auto">
          <h1>Largest stock broker in india</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Future and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img className="mt-5" src="public/media/images/pressLogos.png" alt="Press Logos" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
