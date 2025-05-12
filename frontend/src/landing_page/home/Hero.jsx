import React from 'react'

function Hero() {
  return (
    <div className="container mb-10">
      <div className="row text-center">
      <img className='mb-5' src="public/media/images/homeHero.png" alt="Hero Image" />
      <h1 className=''>Invest in everything</h1>
      <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className='btn btn-primary' style={{"width": "15%", "margin":"auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero
