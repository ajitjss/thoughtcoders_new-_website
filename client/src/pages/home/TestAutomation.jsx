// src/pages/TestAutomation.jsx
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TestAutomation = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
          style={{width:'80%',height:'500px',borderRadius:'10px', marginTop:"20px"}} 
          src="/assets/homeimages/test-automation.png" 
          alt="" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>Test Automation</h2>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Overview</h4>
        </div>
        <div className="col-md-9">
          <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Let’s automate web, mobile App and API testing process</h4>
          <p>
            We know you love to perform regression testing and smoke testing after each new build as it
            ensures your application runs perfectly on Production. But we also know that it’s very costly
            solution for you.  To make it cost-effective, ThoughCoders team is started automation testing services. 
            Our high techie team automates your application and perform your regression with automation.
            Our Automation packs are highly scalable and customizable over vast range of browsers, environments,
            and test data.ThoughtCoders team have highly experienced professionals who have vast range of projects
            experience. They automate your application using open source APIs Selenium, Rest Assured, Testing,
            J Unit, Silk4J, Cucumber, Appium, TOSCA, RPA, Katalon Studio, JDBC, open CSV, and many more.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Challenge</h4>
        </div>
        <div className="col-md-9">
          <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>How we automate</h4>
          <ul>
            <li>Requirement, feasibility and ROI Analysis</li>
            <li>POC and Selection of Tool and client Approval</li>
            <li>Sprint Planning and task allocation</li>
            <li>Client Demo and Feedback incorporation</li>
            <li>Client Delivery</li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Results</h4>
        </div>
        <div className="col-md-9">
          <h4 style={{fontFamily:'georgia,sans-serif',fontWeight:900}}>Why you choose ThoughtCoders</h4>
          <p>
            There are many reasons to choose us but here are few:
          </p>
          <ul>
            <li>Robust and scalable framework development</li>
            <li>Best Design concept implement as per client requirement</li>
            <li>Additional feature integrated in Framework (Database and Server log validation by Automation)</li>
            <li>Best Reporting implementation</li>
            <li>Continuous Integration Implemented</li>
            <li>Training to client and guide provided for framework</li>
            <li>Timely delivery</li>
            <li>Excellence Delivery with value added pack</li>
          </ul>
          <p>
            We are looking for opportunity to deliver best automation framework. For more information/demo feel free 
            to contact us on <Link>+919555902032</Link> or write us on <Link to='mailto:info@thoughtcoders.com' target="_blank">info@thoughtcoders.com</Link>
          </p>
        </div>
      </div>

      <div style={{marginBottom:'70px', marginTop:"50px"}}>
        <Link to='/'>
          <button className='btn btn-outline-warning text-black'><IoMdArrowRoundBack /> Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default TestAutomation;
