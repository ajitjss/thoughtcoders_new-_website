import React from 'react'

const OurKeyClient = () => {
  return (
    <>
        <h2 className='d-flex flex-column justify-content-center align-items-center' style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Our Key Clients</h2>
        <div className="d-flex flex-wrap justify-content-center mt-4">
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/national-vision.png" alt="client 1" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/aviva-logo.png" alt="client 2" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/voyages.png" alt="client 3" />
            <img className="img-fluid m-2" style={{ width: '180px', height: '60px' }} src="/assets/ruc/home-depot.png" alt="client 4" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/hilton.png" alt="client 5" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/ruc/igh.png" alt="client 6" />
        </div>
    </>
  )
}

export default OurKeyClient
