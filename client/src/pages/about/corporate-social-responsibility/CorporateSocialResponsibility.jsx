import React from 'react'

const CorporateSocialResponsibility = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
            style={{width:'100%',height:'500px',borderRadius:'10px', marginTop:"20px"}} 
            src="/assets/homeimages/corporate-social-responsibility.webp" 
            alt="internship-banner" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'30px'}}>
        Corporate Social Responsibility
        </h2>
      </div>
        <p>
          Being a emerging  Software Testing Company, we understand our responsibility for our society and 
          betterment of human life. So we support communities, help the underprivileged students . 
          To achieve this, we have started our work as part of Corporate Responsibility initiative to educate 
          everyone Digitally. We support “Yamuna Digital Research Foundation”  initiatives to  educate everyone.
        </p>
        <p>
          Thoughtcoders team is committed to working on social causes specially on Digital Education.  We support 
          Digital Education for underprivileged students, Software Training for economically weaker students and 
          offer research opportunities to financially weaker college students . Our team supports “Yamuna Digital 
          Research Foundation” . We actively participate as volunteers and provide infrastructure and other support.
        </p>
        <p>We work on the following causes :</p>
        <ul>
          <li>Support Digital Education and provide  computer training to underprivileged students.</li>
          <li>Actively participate in Eco-friendly initiatives like – Tree Plantation and Clean India Mission.</li>
          <li>Support youth in Computer Research and Training</li>
          <li>Provide infrastructure for Computer research for needy students.</li>
          <li>Free Software Training for economically weaker students</li>
        </ul>
      </div>
  )
}

export default CorporateSocialResponsibility
