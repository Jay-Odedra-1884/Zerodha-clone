// import React from "react";

// function OpenAccount() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="offset-3 col-6 text-center">
//           <h1 className="mb-3">Open a Zerodha account</h1>
//           <p className="mb-3">
//             Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
//             F&O trades.
//           </p>
//           <button className="col-4 btn btn-primary">
//             SIgn up for free
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OpenAccount;


import React from 'react'

function OpenAccount() {
  return (
    <div className='container'>
      <div className="row text-center">
        <h1 className='mb-4'>Open a Zerodha account</h1>
      <p className='fs-5 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <button className='btn btn-primary' style={{"width": "15%", "margin":"auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default OpenAccount
