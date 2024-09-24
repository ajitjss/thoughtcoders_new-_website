import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className='container'>
      <SEO
          title="Privacy Policy - An Independent Software Testing Company-Thoughtcoders"
          description="Understand our privacy policy and how we protect your personal data at My Blog App."
          keywords="privacy policy, data protection, user privacy"
      />
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
          style={{width:'100%',height:'400px',borderRadius:'10px', marginTop:"20px"}} 
          src="/assets/homeimages/privacy-policy.png" 
          alt="" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>ThoughtCoders Privacy Policy</h2>
      </div>
      <p>
        ThoughtCoders LLP is a registered company with Ministry of Corporate Affairs. Our registered office is
        located at – Plot 24, Vishunpur, Ballia, Uttar Pradesh. We provide Test Automation, Quality Assurance, 
        Application Development, Trainings and step by step documentation (blogs) on open source technologies. 
        To interact with our clients and users we have web portal <Link to='/'>www.thoughtcoders.netlify.app</Link> . All our services 
        provided by ThoughtCoders.  ThoughtCoders Privacy Policy is designed to protect our user’s personal data. 
        By using our website or document, you acknowledge that you accept the ThoughtCoders Privacy Policy.
      </p>
      <div>
        <h3 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>What Information We Collect and Use:</h3>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Personal Information and Use:</h4>
        <h6 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Google advertising cookies</h6>
      </div>
      <p>ThoughtCoders use Google Adsense as Advertising partner.</p>
      <p>
        Google uses cookies to help serve the ads it displays on the websites of its partners, such as websites 
        displaying Google ads or participating in Google certified ad networks. When users visit a Google 
        partner’s website, a cookie may be dropped on that end user’s browser. Our privacy policy includes:
      </p>
      <ul>
        <li>
          Third party vendors, including Google, use cookies to serve ads based on a user’s prior visits to 
          your website or other websites.
        </li>
        <li>
          Google’s use of advertising cookies enables it and its partners to serve ads to your users based on 
          their visit to your sites and/or other sites on the Internet.
        </li>
        <li>
          Users may opt out of personalized advertising by visiting <Link to='https://myadcenter.google.com/' target='_blank'>Ads Settings.</Link> (Alternatively, you can direct 
          users to opt out of a third-party vendor’s use of cookies for personalized 
          advertising by visiting <Link to='https://optout.aboutads.info/?c=2&lang=EN' target='_blank'>aboutads.info.</Link>)
        </li>
      </ul>
      <p>
        <strong>Opting Out:</strong> If you have not opted out
        of <Link to='https://support.google.com/admanager/answer/1670087?visit_id=638627728419057092-2340403324&rd=1' target="_blank">third-party</Link> ad serving, the cookies of other 
        third-party vendors or ad <Link to='https://support.google.com/admanager/answer/94149' target='_blank'>networks</Link> may also be used to serve ads on your site, which should also be 
        disclosed in your privacy policy in the following manner:
      </p>
      <ul>
        <li>Notify your site visitors of the third-party vendors and ad networks serving ads on your site.</li>
        <li>Provide links to the appropriate vendor and ad network websites.</li>
      </ul>
      <p>
        Inform your users that they may visit those websites to opt out of the use of cookies for personalized 
        advertising (if the vendor or ad network offers this capability). Alternatively, you can direct users to 
        opt out of some third-party vendors’ uses of cookies for personalized advertising by visiting 
        <Link to="https://optout.aboutads.info/?c=2&lang=EN" target='_blank'></Link>aboutads.info .
      </p>
      <p>
        Because publisher sites and laws across countries vary, we’re unable to suggest specific privacy policy 
        language. However, you may wish to review resources such as the Network Advertising Initiative for 
        guidance on drafting a privacy policy. For additional details regarding cookie consent notices, please 
        refer to <Link to="https://www.google.com/about/company/user-consent-policy-help/" target='_blank'>cookiechoices.org.</Link>
      </p>
      <h6 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Personal Data Protection:</h6>
      <p>
        ThoughtCoders committed to protect our user personal data. Our Data Protections Policy complied as GDPR 
        and <span style={{textDecoration:'None'}}><Link to='/gdpr-commitment/'>European Union Data Protection Act.</Link></span>
      </p>
      <h6 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Third Party Disclosure:</h6>
      <p>Thoughtcoders do not sell , trade or transfer your personal information to any party.</p>
      <h6 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}> No Cancellation and Refund Policy:</h6>
      <p>
        There is no refund and no cancellation policy on our services, product, digital Marketing and application 
        development Services.
      </p>
      <h6 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Our Advertising Partners:</h6>
      <p>
        Google Adsense- ThoughtCoders follow the Google Adsense Privacy Policy
        <Link to='https://www.google.com/adsense/new/localized-terms?hl=en_US' target='_blank'>(https://www.google.com/adsense/new/localized-terms?hl=en_US ).</Link>
      </p>
      <div className='mt-5 mb-5'>
        <h6 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          Contact Us: For any privacy-related issues, contact us on :
          Thoughtcoders LLP,
        </h6>
        <p><strong style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Address: </strong>IT Building, Bhimpura No.1 T. Barewa, Uttar Pradesh 221716</p>
        <p><strong style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Email:</strong> <Link to="mailto:info@thoughtcoders.com" target='_blank'>info@thoughtcoders.com</Link></p>
        <p><strong style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Contact No:</strong> +919555902032</p>
        <p><strong style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Policy Updated on:</strong> 04 April, 2022</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy