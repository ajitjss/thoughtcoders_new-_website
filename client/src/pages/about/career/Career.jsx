import React from 'react'


const careerHeadingStyle={
  fontFamily:"georgia",
  fontWeight:"800",
  marginTop:'20px'
}
const Career = () => {
  return (
    <div className="container">
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
            style={{width:'100%',height:'425px',borderRadius:'10px', marginTop:"20px"}} 
            src="/assets/homeimages/career-1.webp" 
            alt="" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'30px'}}>
        Join Us to work on your dreams projects
        </h2>
      </div>

      <div>
        <p>
          Being the emerging leader in futuristic technologies, we are fostering a high tech environment where 
          talent can grow and make an impact on the World. ThoughtCoders team working on clear vision, goals 
          with excellent technologies for amazing businesses. To know more about ThoughtCoders vision and about 
          us visit About Us. ThoughtCoders gives the opportunity to young talents to work on their preferred 
          technologies.
        </p>
        <p>
          ThoughtCoders team devoted to building high tech, efficient and cost effective solutions for clients 
          using best technologies. Our expertise is in Web Development, Software Quality Assurance, 
          Test Automation and Digital Marketing. We provide a solution using Airtificial Intelligence (AI), 
          Machine learning (ML), Java, Python, SQL, JavaScript, React, Node JS, Selenium, CSS, PHP, Cypress, 
          JMeter, Digital Transformation, DevOps, and many more technologies. We proudly serves banks, fintech 
          companies, fintech startups, cryoto banks, E- commerce, Procurement applications, edu applications, 
          sports leagues, insurance companies, games, and internet of things applications.
        </p>
        <ul >
          <li>Digital Marketing Intern</li>
          <li>Quality Analyst Intern</li>
          <li>Junior Website Developer</li>
          <li>Creative Content Writer</li>
          <li>Junior Automation Engineer</li>
          <li>Performance Tester Intern(QA)</li>
          <li>Video Editor</li>
          <li>Data Analyst Intern</li>
          <li>Junior Software Engineer (Python)</li>
          <li>Junior Software Engineer(Java)</li>
          <li>Part-time Content Writer</li>
          <li>Junior Research Associates ( on Computer Science Technologies)</li>
        </ul>

        <h3 style={careerHeadingStyle}>To all our interns we offer following benefits:</h3>
      </div>
    </div>
  )
}

export default Career
