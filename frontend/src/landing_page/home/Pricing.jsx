import React from 'react'

function Pricing() {
  return (
    <div className="container mb-10">
      <div className="row">
        <div className="col-5">
          <h1>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" style={{"textDecoration": "none"}}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-7 row">
          <div className="col-4 home-pricing-card">
            <img src="public/media/images/pricing0.svg" alt="" />
            <p>Free account <br /> opening</p>
          </div>
           <div className="col-4 home-pricing-card">
            <img src="public/media/images/pricing0.svg" alt="" />
            <p>Free equity delivery <br />and direct mutual funds</p>
          </div>
           <div className="col-4 home-pricing-card">
            <img src="public/media/images/Pricing20.svg" alt="" />
            <p>Intraday and <br />F&O</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
