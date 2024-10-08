import React from 'react'
import './Katalon.css'
const Training = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-7 katalon-content">
            <h1 className='kt-heading'>Katalon Studio</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deserunt minus corporis 
                repudiandae culpa tempore impedit assumenda in at eligendi cumque asperiores, eius alias! 
                Iste libero quos delectus odit, consequuntur doloribus saepe quas optio inventore. 
                Exercitationem ullam omnis, suscipit molestias asperiores enim quidem, quos, voluptatum natus 
                praesentium dolor consectetur? Dolores?
            </p>
            <div className='training-button'>
              <button className='kt-button1'>Get In Touch</button>
              <button className='kt-button2'>Read More</button>
            </div>
        </div>
        <div className="col-md-5">
            <img src="https://katalon.com/_next/static/media/banner-image.9f20524d.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Training

