import React from 'react'

const OurKeyClient = () => {
  return (
    <>
        <h2 className='d-flex flex-column justify-content-center align-items-center' style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Our Key Clients</h2>
        <div className="d-flex flex-wrap justify-content-center mt-4">
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/national-vision.webp" alt="client_1" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/aviva-logo.webp" alt="client_2" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/voyages.webp" alt="client_3" />
            <img className="img-fluid m-2" style={{ width: '180px', height: '60px' }} src="/assets/ruc/home-depot.webp" alt="client_4" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/hilton.webp" alt="client_5" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/igh.webp" alt="client_6" />
        </div>
    </>
  )
}

export default OurKeyClient
