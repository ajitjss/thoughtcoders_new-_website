import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './TestAutomation.css';

const TestAutomation = () => {
  return (
    <div className='container'>
      {/* Header Section */}
      <header className='d-flex flex-column justify-content-center align-items-center'>
        <img 
        style={{width:'800px'}}
          className="responsive-img" 
          src="/assets/homeimages/test-automation.webp" 
          alt="Test Automation Overview" 
          loading="lazy" 
        />
        <h1 className="main-heading" style={{fontFamily:'georgia'}}>Test Automation</h1>
      </header>

      {/* Overview Section */}
      <section className="row mt-5">
        <div className="col-md-3">
          <h2 className="sub-heading">Overview</h2>
        </div>
        <div className="col-md-9">
          <h3 className="sub-heading">Let’s automate web, mobile App, and API testing process</h3>
          <p>
            We know you love to perform regression testing and smoke testing after each new build as it
            ensures your application runs perfectly in production. However, this is often costly. To make it 
            cost-effective, the ThoughtCoders team offers automation testing services.
            Our high-tech team automates your application and performs your regression testing with automation.
            Our automation packs are scalable and customizable across a wide range of browsers, environments,
            and test data. ThoughtCoders has experienced professionals who have worked on a wide range of projects.
            They automate your application using open source APIs like Selenium, Rest Assured, JUnit, Cucumber, 
            Appium, and more.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="row mt-5">
        <div className="col-md-3">
          <h2 className="sub-heading">Challenge</h2>
        </div>
        <div className="col-md-9">
          <h3 className="sub-heading">How We Automate</h3>
          <ul>
            <li>Requirement, feasibility, and ROI analysis</li>
            <li>POC, selection of tools, and client approval</li>
            <li>Sprint planning and task allocation</li>
            <li>Client demos and feedback incorporation</li>
            <li>Final client delivery</li>
          </ul>
        </div>
      </section>

      {/* Results Section */}
      <section className="row mt-5">
        <div className="col-md-3">
          <h2 className="sub-heading">Results</h2>
        </div>
        <div className="col-md-9">
          <h3 className="sub-heading">Why Choose ThoughtCoders</h3>
          <p>
            Here are some reasons to choose us:
          </p>
          <ul>
            <li>Robust and scalable framework development</li>
            <li>Best design concepts implemented as per client requirements</li>
            <li>Additional features integrated in the framework (Database and server log validation by automation)</li>
            <li>Best reporting implementation</li>
            <li>Continuous integration implemented</li>
            <li>Training and guidance provided for the framework</li>
            <li>Timely delivery</li>
            <li>Excellent delivery with added value</li>
          </ul>
          <p>
            For more information or a demo, feel free to contact us at 
            <a href="tel:+919555902032" aria-label="Call us at +919555902032">+919555902032</a> or email us at 
            <a href="mailto:info@thoughtcoders.com" target="_blank" rel="noopener noreferrer">info@thoughtcoders.com</a>.
          </p>
        </div>
      </section>

      {/* Back Button */}
      <footer style={{marginBottom:'70px', marginTop:"50px"}}>
        <Link to='/'>
          <button className='btn btn-outline-warning text-black'>
            <IoMdArrowRoundBack aria-hidden="true" /> Go Home
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default TestAutomation;
