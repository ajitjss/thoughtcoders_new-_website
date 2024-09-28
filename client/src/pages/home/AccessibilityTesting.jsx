// src/pages/AccessibilityTesting.jsx
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const AccessibilityTesting = () => {
  return (
    <div className='container'>
      
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
          style={{width:'100%',height:'400px',borderRadius:'10px', marginTop:"20px"}} 
          src="/assets/homeimages/accessibility-testing.png" 
          alt="" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Accessibility Testing Case Study</h2>
      </div>
      
      <p>
        It’s unfortunate to share that 18% of human population struggle with disabilities and they failed
        to access digital content. On other side Accessibility  Testing also skipped from  Software Development
        Life Cycle (SDLC). Ensuring universally available and accessible application, including those who suffer
        from various disabilities. In other words, accessibility testing is a practice of confirming that an 
        application is usable for as many people as possible, including people with disabilities such as vision
        impairment, hearing problems and cognitive conditions.
      </p>
      <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Challenges</h4>
      <ul>
        <li>More than one billion people globally have some from disability.</li>
        <li>This corresponds to about 15% of the world’s population.</li>
        <li>Between 110-190 million people have very significant difficulties in functioning.</li>
        <li>In the US, 12.6% of the population suffers from some kind of disability.</li>
      </ul>
      <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Types of Disabilities</h4>
      <ul>
        <li>Visual impairment.</li>
        <li>Lack of motor skills.</li>
        <li>Hearing impairment.</li>
        <li>Cognitive disability.</li>
      </ul>
      <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>What can we do?</h4>
      <div>
        <h6>1. Understand and implement accessibility guidelines and standards</h6>
        <p>–  WCAG 2.0, section 508</p>
      </div>
      <div>
        <h6>2. Understand Accessibility from usage standpoint</h6>
        <p>– Usability experts, end-user connect program.</p>
      </div>
      <div>
        <h6>3. Manual and automated accessibility Quality checks</h6>
        <p>– Right balance, test tools(w3c link checker, color contrast analyser tools, etc.)</p>
      </div>

      <div>
        <p>
          Today’s need is not just desktop solutions but also mobile applications. So we need to keep in mind some
          of the points that are required to make our system more user friendly and easy to access.
        </p>
        <ul>
          <li>Functionality.</li>
          <li>Mobile context.</li>
          <li>Different devices.</li>
          <li>Data entry methods.</li>
          <li>Multimodality.</li>
        </ul>
      </div>
      <h6>4. Accessibility Evaluations</h6>
      <ul>
        <li>Content.</li>
        <li>Good color contrast.</li>
        <li>Minimal flash content.</li>
        <li>Resize text.</li>
        <li>Proper alt-text.</li>
        <li>Complete coverage.</li>
      </ul>

      <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Basic questions around the tasks are-</h5>
      <p>1. Who are your end users?</p>
      <p>2. What are their usual tasks?</p>
      <p>3. What environment are they in?</p>
      <p>4. What types of devices do they use?</p>
      <p>5. What is your user’s level of tech-savviness?</p>
      <p>6. Is a lot of reading involved?</p>
      <p>7. Is data entry involved?</p>
      <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Solution</h5>
      <p>
        Our team explored the accessibility testing practices across Software Industry and compiled
        challenges and on the basis of the developed best practices, accessibility testing tools suite
        and set expertise team on Accessibility Testing.  Our team commitment and expertise is 
        continuously delivering excellent quality and highly accessible application to end users.
      </p>
      <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Types of Accessibility testing</h4>
      <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>1. Manual testing</h5>
      <p>
        QA teams used to test the application manually and verify test cases whether they are working or not. 
        Examples of accessibility testing are manually reviewing keyboard, User interface  structural elements,
        text sizing, content scaling and text sizing. <br /> These types of cases can also increase the stability 
        and accuracy of the testing process.
      </p>
      <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>2. Automation</h5>
      <p>
        QA teams used some of the automated tools to verify test cases so they can ensure that the application meets
        the desired output. And the application is designed in such a way that it is easy to access. 
        Some of the automated tools are as follows.
      </p>
      <ul>
        <li>Wave</li>
        <li>Tenon</li>
        <li>Jaws</li>
        <li>Axe</li>
        <li>Accessibility valet</li>
      </ul>

      <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Test cases</h5>
      <p>Some of the test cases would be in the case of accessibility testing.</p>
      <ul>
        <li>Verify if there are shortcuts present for menu items.</li>
        <li>Verify that if the user manual is provided.</li>
        <li>Verify if the font sizes can be enlarged.</li>
        <li>Verify the captions, headings are available.</li>
        <li>Verify if the user can access the audio and video controls.</li>
        <li>Verify if there are correct product alerts.</li>
        <li>Verify if the content is easily understandable.</li>
        <li>Verify color and contrast is soothing for the eye.</li>
        <li>Content is properly visible in high contrast mode.</li>
        <li>Use the right combination of Fonts in Content (Avoid full Capital letter)</li>
      </ul>
      <div style={{marginBottom:'70px', marginTop:"50px"}}>
        <Link to='/'>
          <button className='btn btn-outline-warning text-black'><IoMdArrowRoundBack /> Go Home</button>
        </Link>
      </div>
      
    </div>
  );
};

export default AccessibilityTesting;
