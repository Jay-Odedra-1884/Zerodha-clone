import React from 'react'

function Footer() {
  return (
    <footer className='bg-light pt-5 mt-5 text-muted'>
      <div className="container">
        <div className='row mb-4'>
        <div className="col">
          <img src="public/media/images/logo.svg" alt="ZERODHA" style={{width:"50%"}} />
        </div>
        <div className="col">
          <p>Company</p>

          <a className='text-decoration-none text-muted' href="">About</a><br />
          <a className='text-decoration-none text-muted' href="">Products</a><br />
          <a className='text-decoration-none text-muted' href="">Pricing</a><br />
          <a className='text-decoration-none text-muted' href="">Referral programme</a><br />
          <a className='text-decoration-none text-muted' href="">Careers</a><br />
          <a className='text-decoration-none text-muted' href="">Zerodha.tech</a><br />
          <a className='text-decoration-none text-muted' href="">Open source</a><br />
          <a className='text-decoration-none text-muted' href="">Press & media</a><br />
          <a className='text-decoration-none text-muted' href="">Zerodha Cares (CSR)</a><br />
        </div>
        <div className="col">
          <p>Support</p>

          <a className='text-decoration-none text-muted' href="" >Contact us</a><br />
          <a className='text-decoration-none text-muted' href="" >Support portal</a><br />
          <a className='text-decoration-none text-muted' href="" >Z-Connect blog</a><br />
          <a className='text-decoration-none text-muted' href="" >List of charges</a><br />
          <a className='text-decoration-none text-muted' href="" >Downloads & resources</a><br />
          <a className='text-decoration-none text-muted' href="" >Videos</a><br />
          <a className='text-decoration-none text-muted' href="" >Market overview</a><br />
          <a className='text-decoration-none text-muted' href="" >How to file a complaint?</a><br />
          <a className='text-decoration-none text-muted' href="" >Status of your complaints</a><br />
        </div>
        <div className="col">
          <p>Account</p>

          <a className='text-decoration-none text-muted' href="">Open an account</a><br />
          <a className='text-decoration-none text-muted' href="">Fund transfer</a>
        </div>
      </div>
      <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a className='text-decoration-none' href="">create a ticket here</a>, for DP related to <a className='text-decoration-none' href="">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      <p>Procedure to file a complaint on <a className='text-decoration-none' href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
      <a className='text-decoration-none' href="">Smart Online Dispute Resolution </a>
      <span className='border me-1 ms-1' style={{width: "2px"}}></span>
      <a className='text-decoration-none' href=""> Grievances Redressal Mechanism</a>
      <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
      <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
      <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a className='text-decoration-none' href="">create a ticket here</a>.</p>
      </div>
    </footer>
  )
}

export default Footer
