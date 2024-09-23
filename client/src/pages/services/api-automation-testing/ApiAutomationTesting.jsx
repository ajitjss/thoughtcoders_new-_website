import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ApiAutomationTesting = () => {
    return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
            style={{width:'100%',height:'350px',borderRadius:'10px', marginTop:"20px"}} 
            src="/assets/homeimages/api-automation-testing-2.png" 
            alt="" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'30px'}}>
        API Automation Testing
        </h2>
      </div>
        {/* API Automation Testing */}
      <div className='mt-2'>
        <p>
            API Automation Testing is highly popular choice for great product builders. Many businesses,
            especially IT companies use this to check the functionality and performance of their digital assets.
            The API automation testing is a type of software used at a message layer without using GUI. In short,
            we can say that it is a part of integration testing to check whether an API meets the expectations
            of a tester or not. A large number of IT companies rely on API testing as it is crucial to check 
            the quality of the product. ThoughtCoders is one of the best companies offering API automation testing 
            services.
        </p>
      </div>
        {/* What are the Types of API Testing? */}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          What are the Types of API Testing?
        </h4>
        <p>
          ThoughCoders provides various API automation testing types for your business. We recommend API Automation 
          Testing to our clients as it is faster as compared to Web and UI Testing.
        </p>
      </div> 
      {/* Validation Testing */}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          Validation Testing
        </h4>
        <p>
          Validation testing is an essential part and counted as one of the most significant testing types. 
          This type of testing is crucial in the development process. We do validation and verification  of API
          to enusre robust functionality of API. Validation testing is an assurance of the correct development.
        </p>
        <ul>
          <li>Saves a lot of time and money in rebuilding any application.</li>
          <li>Know how your Android app is performing in the real-time scenario.</li>
          <li>Ensure the better performance of an app with its quality and functionality.</li>
          <li>Assist you in finding bugs in your Android app and resolving them.</li>
        </ul>
      </div> 
      {/* API Functional Testing */}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          API Functional Testing
        </h4>
        <p>
          This testing includes the testing of particular functions in the codebase. It is the testing of particular
          functions within the codebase. It is a representation of specific scenarios to ensure that API functions 
          are always handled within the specified parameters.
        </p>
      </div> 
      {/* API Performance Testing */}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          API Performance Testing
        </h4>
        <p>
          To ensure the proper functioning of API and holding the higher or expected load, ThoughtCoders validate its
          performance. Common API performance testing includes Load Tests, Stress Tests, Spike Tests, Peak Tests,
          and Scalability Tests.
        </p>
      </div> 
      {/* UI Testing */}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          UI Testing
        </h4>
        <p>
          This test ensures that API is safe and secure from external threats. This type of testing includes 
          Penetration Test, Fuzz Test, and Security Test for security auditing procedure. The primary focus of 
          these tests is to know if an API is secure from any external threat or not.
        </p>
      </div> 
      {/* Why should you choose us for API automation testing? */}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          Why should you choose us for API automation testing?
        </h4>
        <p>
          As one of the biggest API Automation testing providers, ThoughtCoders complete this testing by 
          aligning it with your business needs. We follow a thorough process of <strong>API Testing Automation</strong>, which provides 
          you with the following benefits.
        </p>
        <ul>
          <li>We minimize your spending on API automation testing, using the state-of-the-art technologies that we use.</li>
          <li>Our goal is the timely delivery of all projects using a swift method for API testing.</li>
          <li>Our expert team finds and isolates any buggy module in your digital asset and rectifies it.</li>
          <li>The API Automation testing process we use ensures that the end-user experience remains unaffected.</li>
        </ul>
      </div> 
      {/* A Renowned API Automation Testing Company*/}
      <div className='mt-5'>
        <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>
          A Renowned API Automation Testing Company
        </h4>
        <p>
          ThoughtCoders is a top-notch <strong>API Automation Testing</strong> Company to improve the performance of your digital assets. 
          We understand  the importance of <strong>API Testing</strong> for your business. Our team of highly skilled experts ensure that 
          all functionality of APIs are perfect and responses are correct. We are renowned for our <strong>API Automation Testing</strong> 
          framework development. In addition, the <strong>REST API automation testing, Websaervices API testing</strong>, 
          and <strong>API Automation Testing</strong> are also some of the expertise services. We offer to all businesses according to 
          their requirements.
        </p>
      </div> 
      <div style={{marginBottom:'70px', marginTop:"50px"}}>
        <Link to='/'>
          <button className='btn btn-outline-warning text-black'><IoMdArrowRoundBack /> Go Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ApiAutomationTesting
