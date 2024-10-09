import React from 'react';
import './Katalon.css';
import Accordion from 'react-bootstrap/Accordion';

const Katalon = () => {
  return (
    <>
      <div className="bg-container-fluid">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="kt-heading">Katalon Studio</h2>
              <p className="kt-text">
                Katalon Studio is a comprehensive, all-in-one test automation tool designed for web, mobile, 
                desktop, and API testing. It is user-friendly, allowing both beginners and advanced testers to 
                create and execute automated tests efficiently. Katalon supports multiple scripting languages 
                like Groovy and integrates with CI/CD tools such as Jenkins and Git. It offers built-in keywords, 
                record-and-playback features, and a customizable test environment, enhancing productivity. 
                Katalon also provides rich analytics and reporting features to track test performance.
              </p>
              <div className="training-button mt-3">
                <button className="btn btn-primary me-3">Get In Touch</button>
                <button className="btn btn-outline-dark">Read More</button>
              </div>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0">
              <img
                className="img-fluid"
                src="https://katalon.com/_next/static/media/banner-image.9f20524d.svg"
                alt="Katalon Studio"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              className="img-fluid katalon-image"
              src="/assets/training/low-code-katalon.png"
              alt="Low Code Automation Tool Training"
            />
          </div>
          <div className="col-md-6">
            <h2 className="kt-heading">Low Code Automation Tool Training</h2>
            <p className="kt-text">
              Katalon low-code automation tool training teaches users to automate web, mobile, API, and 
              desktop tests with minimal coding. It covers Katalon’s keyword-driven testing, test recording, 
              data-driven testing, reusable test cases, and object repositories. The training enables 
              efficient test creation, CI/CD integration, and collaboration in agile and DevOps workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-container-fluid py-5">
        <div className="container">
          <h2 className="kt-heading">Features of Katalon Studio Training at ThoughtCoders</h2>
          <p className="kt-text">
            ThoughtCoders training programs are designed from beginning level to advance level. Our Katalon Studio
            training program is very intuitive and with rich content. Even a beginner can learn from zero to 
            expert level. Our specialized Katalon Studio Training has the following features:
          </p>
          <ul className="kt-list">
            <li>Training demonstrated over live Application and Industrial case studies</li>
            <li>80% live Coding/Practical and 20% Theory sessions</li>
            <li>Syllabus updated as per modern industry needs</li>
            <li>1 to 1 Mentorship and assistance provided</li>
            <li>Job assistance and support till Job offer</li>
            <li>Certificate provided for Course Completion</li>
            <li>Resume Building and Mock Interview sessions</li>
            <li>On Job support provided if required</li>
          </ul>
          <a
            href="/assets/download/katalon-syllabus/katalon-studio-training-syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning mt-3"
          >
            Download Katalon Studio Training Syllabus
          </a>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="kt-heading">Sample Katalon Studio Certificate</h2>
            <p className="kt-text">
              Innovate, Develop, Build and Redesign World Class Applications. Our expert developers build best 
              Applications for Web, Mobile (Android, IOS, and Windows).
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid katalon-image"
              src="/assets/training/katalon-certificate-sample.jpeg"
              alt="Sample Certificate"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Katalon Studio?</Accordion.Header>
            <Accordion.Body>
              <p className="kt-text">
                Katalon Studio is a test automation tool used for Web, Mobile, API, and Desktop automation. Built 
                on top of Eclipse and open-source technologies, Katalon Studio has emerged as an AI-based automation tool.
              </p>
              <ul className="kt-list">
                <li>Web Automation</li>
                <li>API Automation</li>
                <li>Mobile Automation</li>
                <li>Desktop Automation</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why we should do Katalon Studio Training?</Accordion.Header>
            <Accordion.Body>
              <p className="kt-text">
                Katalon Studio is an emerging automation tool, trending among industries, and brings job 
                opportunities in Test Automation Domain. It offers various learning certificates that can boost your career.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Why we should do Katalon Studio Training from ThoughtCoders?</Accordion.Header>
            <Accordion.Body>
              <p className="kt-text">
                ThoughtCoders is the official partner of Katalon Studio and provides expert training on the tool.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Katalon;
