import React from 'react'
import GetInTouch from '../../components/GetInTouch'
import SEO from '../../components/SEO'

const ContactUs = () => {
  return (
    <div>
    <SEO
        title="Contact Us - An Independent Software Testing Company-Thoughtcoders"
        description="Get in touch with us at My Blog App. We'd love to hear from you."
        keywords="contact, support, customer service"
      />
      <div className='p-4'>
        <GetInTouch />
      </div>
    </div>
  )
}

export default ContactUs