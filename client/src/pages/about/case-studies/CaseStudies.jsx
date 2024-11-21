import React from 'react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  return (
    <div className="container" style={{marginTop:'50px'}}>
      <div className="row">
        <div className="col-md-4">
          <div classname="card-group">
            <div className="card">
              <img className="card-img-top" src="https://thoughtcoders.com/wp-content/uploads/2019/09/Test-Automation.jpg.webp" alt="card-cap-1" />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer d-grid">
                <Link to='/case-studies/test-automation/'><button className='btn btn-outline-primary'>View Case Study</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div classname="card-group">
            <div className="card">
              <img className="card-img-top" src="https://thoughtcoders.com/wp-content/uploads/2019/09/Custom.png.webp" alt="card-cap-2" />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer d-grid">
                <button className='btn btn-outline-primary'>View Case Study</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div classname="card-group">
            <div className="card">
              <img className="card-img-top" src="https://thoughtcoders.com/wp-content/uploads/2022/03/WebRTC-Automation.jpg" alt="card-cap-3" />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer d-grid">
                <button className='btn btn-outline-primary'>View Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default CaseStudies
