import React from 'react'

function Stats() {
  return (
    <div className='container mb-10'>
      <div className="row">
        <div className="col-6">
        <h1 className='fs-2 mb-5'>Trust with confidence</h1>
        <h2 className='fs-4 mb-2 fw-normal'>Customer-first always</h2>
        <p className='text-muted mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
        <h2 className='fs-4 mb-2 fw-normal'>No spam or gimmicks</h2>
        <p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
        <h2 className='fs-4 mb-2 fw-normal'>The Zerodha universe</h2>
        <p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        <h2 className='fs-4 mb-2 fw-normal'>Do better with money</h2>
        <p className='text-muted mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>
      <div className="col-6">
        <img className='mx-5' src="public/media/images/ecosystem.png" alt="Eco System" style={{width:"95%"}} />
      </div>
      </div>
    </div>
  )
}

export default Stats
