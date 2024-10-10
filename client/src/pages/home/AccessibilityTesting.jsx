// src/pages/AccessibilityTesting.jsx
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import './AccessibilityTesting.css'; // Ensure styles are in a separate CSS file

const AccessibilityTesting = () => {
  return (
    <main className='container'>
      <header className='d-flex flex-column justify-content-center align-items-center'>
        <img 
          className='responsive-img'
          src="/assets/homeimages/accessibility-testing.png" 
          alt="Accessibility Testing Overview" 
        />
        <h2 className='main-heading'>Accessibility Testing Case Study</h2>
      </header>
      
      <section>
        <p>
          It’s unfortunate to share that 18% of the human population struggle with disabilities and cannot
          access digital content. Accessibility Testing is often skipped from the Software Development
          Life Cycle (SDLC). Ensuring universally available and accessible applications, including those who suffer
          from various disabilities, is essential. In other words, accessibility testing is the practice of confirming that an 
          application is usable for as many people as possible, including people with disabilities such as vision
          impairment, hearing problems, and cognitive conditions.
        </p>
        
        <h4 className='sub-heading'>Challenges</h4>
        <ul>
          <li>More than one billion people globally have some form of disability.</li>
          <li>This corresponds to about 15% of the world’s population.</li>
          <li>Between 110-190 million people have very significant difficulties in functioning.</li>
          <li>In the US, 12.6% of the population suffers from some kind of disability.</li>
        </ul>

        <h4 className='sub-heading'>Types of Disabilities</h4>
        <ul>
          <li>Visual impairment</li>
          <li>Lack of motor skills</li>
          <li>Hearing impairment</li>
          <li>Cognitive disability</li>
        </ul>

        <h4 className='sub-heading'>What Can We Do?</h4>
        <div>
          <h6>1. Understand and implement accessibility guidelines and standards</h6>
          <p>– WCAG 2.0, Section 508</p>
        </div>
        <div>
          <h6>2. Understand Accessibility from a usage standpoint</h6>
          <p>– Usability experts, end-user connect program</p>
        </div>
        <div>
          <h6>3. Manual and automated accessibility quality checks</h6>
          <p>– Right balance, test tools (W3C link checker, color contrast analyzer tools, etc.)</p>
        </div>

        <p>
          Today’s need is not just desktop solutions but also mobile applications. We need to keep in mind some
          points to make our system more user-friendly and easy to access.
        </p>
        <ul>
          <li>Functionality</li>
          <li>Mobile context</li>
          <li>Different devices</li>
          <li>Data entry methods</li>
          <li>Multimodality</li>
        </ul>

        <h6>4. Accessibility Evaluations</h6>
        <ul>
          <li>Content</li>
          <li>Good color contrast</li>
          <li>Minimal flash content</li>
          <li>Resize text</li>
          <li>Proper alt-text</li>
          <li>Complete coverage</li>
        </ul>

        <h5 className='solution-heading'>Basic questions around the tasks are:</h5>
        <p>1. Who are your end users?</p>
        <p>2. What are their usual tasks?</p>
        <p>3. What environment are they in?</p>
        <p>4. What types of devices do they use?</p>
        <p>5. What is your user’s level of tech-savviness?</p>
        <p>6. Is a lot of reading involved?</p>
        <p>7. Is data entry involved?</p>

        <h5 className='solution-heading'>Solution</h5>
        <p>
          Our team explored accessibility testing practices across the software industry and compiled
          challenges based on best practices. We developed an accessibility testing tools suite
          and established an expert team for Accessibility Testing. Our team is committed to continuously delivering excellent quality and highly accessible applications to end users.
        </p>

        <h4 className='sub-heading'>Types of Accessibility Testing</h4>

        <h5 className='sub-heading'>1. Manual Testing</h5>
        <p>
          QA teams test the application manually and verify whether test cases are working. 
          Examples of accessibility testing include reviewing keyboard navigation, User interface structural elements,
          text sizing, content scaling, and text sizing. These types of cases can also increase the stability 
          and accuracy of the testing process.
        </p>

        <h5 className='sub-heading'>2. Automation</h5>
        <p>
          QA teams use automated tools to verify test cases, ensuring that the application meets
          the desired output and is easy to access. Some automated tools include:
        </p>
        <ul>
          <li>Wave</li>
          <li>Tenon</li>
          <li>Jaws</li>
          <li>Axe</li>
          <li>Accessibility Valet</li>
        </ul>

        <h5 className='sub-heading'>Test Cases</h5>
        <p>Some of the test cases for accessibility testing include:</p>
        <ul>
          <li>Verify if there are shortcuts present for menu items.</li>
          <li>Verify that a user manual is provided.</li>
          <li>Verify if font sizes can be enlarged.</li>
          <li>Verify the availability of captions and headings.</li>
          <li>Verify if the user can access audio and video controls.</li>
          <li>Verify if there are correct product alerts.</li>
          <li>Verify if the content is easily understandable.</li>
          <li>Verify that color and contrast are soothing for the eyes.</li>
          <li>Verify content visibility in high contrast mode.</li>
          <li>Use the right combination of fonts in content (Avoid full capital letters).</li>
        </ul>
      </section>

      <footer style={{marginBottom: '70px', marginTop: '50px'}}>
        <Link to='/'>
          <button className='btn btn-outline-warning text-black'>
            <IoMdArrowRoundBack /> Go Home
          </button>
        </Link>
      </footer>
    </main>
  );
};

export default AccessibilityTesting;
