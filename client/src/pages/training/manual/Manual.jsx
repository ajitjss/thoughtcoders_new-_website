import React from 'react';
import './Manual.css';

const Manual = () => {
  return (
    <main className='container py-5'>
      <section className="row">
        <article className="col-md-7 manual-content">
          <h1 className='kt-heading'>Manual Testing</h1>
          <p>
            Manual testing is the process of manually evaluating software for defects without the use of 
            automation tools. In this approach, testers act as end-users and execute test cases by interacting 
            with the application to identify bugs or issues in functionality, usability, and overall behavior. 
            It involves critical thinking, creativity, and domain knowledge to ensure that the software meets 
            its specified requirements. Key types of manual testing include functional, regression, integration, 
            and user acceptance testing (UAT). While time-consuming, manual testing is essential for identifying 
            issues that automated tests might miss, particularly in user interfaces and experience.
          </p>
          <div className="training-button mt-3">
            <button className="btn btn-primary me-3">Get In Touch</button>
            <button className="btn btn-outline-dark">Read More</button>
          </div>
        </article>
        <figure className="col-md-5">
          <img src="https://dz2cdn1.dzone.com/storage/temp/15924809-1592474520233.webp" alt="Manual Testing Diagram" loading="lazy" />
        </figure>
      </section>
      
      <section className="py-3">
        <div className="container">
          <h2 className="kt-heading">Manual Testing Training</h2>
          <p className="kt-text">
            This is the fundamental course which is designed to provide training on Software Quality Assurance, 
            Software Test Life Cycle (STLC) and Testing Process in depth. This training is demonstrated on live 
            applications, tools and documents. Comprehensive content provided and after training, 
            Trainee can crack job upto 3 years or Senior Roles.
          </p>
          <h4 className="kt-heading">Highlights of Training topics:</h4>
          <ul>
            {/* Replaced repetitive list items with semantic headings and structured format */}
            <li>Introduction of Manual Testing/Functional Testing</li>
            <li>Manual Testing as a Career opportunity</li>
            <li>Software Test Life Cycle (STLC)</li>
            <li>Test Case writing, execution, Test Report and Management</li>
            <li>Requirement Analysis and Software Requirement Document Analysis</li>
            <li>Functional Testing Concepts: Functional, Integration, Regression, Smoke, and Sanity Testing</li>
            <li>Non-Functional Testing Concepts: Performance, Stress, Volume, Load Testing</li>
            <li>Test Management Tools (HPQC ALM, BUGZILLA, JIRA)</li>
            <li>Bug Life Cycle</li>
            <li>Test Strategy and Test Planning Document Creation</li>
            <li>Defect Document Creation and Defect Reporting</li>
            <li>Test Data Creation (Equivalence Partitioning, Boundary Value Analysis)</li>
            <li>Industrial Project Demonstration</li>
            <li>Sign-off Document Creation and Test Closure Activities</li>
          </ul>
          <a
            href="/assets/download/Manual-Testing-Training-Syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning mt-3"
          >
            Download Manual Testing Training Syllabus
          </a>
        </div>
      </section>

      <section className="container mt-1 mb-5">
        <h4 className="kt-heading">Features of Manual Testing Training Programs</h4>
        <p>
          ThoughtCoders training programs are designed from beginner to advanced levels, very intuitive 
          with rich content. Even a beginner can learn from zero to expert level. Salient features of  
          our training courses are below:
        </p>
        <ul>
          <li>Introduction of Manual Testing/Functional Testing</li>
          <li>Manual Testing as a Career opportunity</li>
          <li>Software Test Life Cycle (STLC)</li>
          <li>Test Case writing, execution, Test Report and Management</li>
          <li>Requirement Analysis and Software Requirement Document Analysis</li>
          <li>Functional Testing Concepts: Functional, Integration, Regression, Smoke, Sanity Testing</li>
          <li>Non-Functional Testing Concepts: Performance, Stress, Volume, Load Testing</li>
          <li>Test Management Tools (HPQC ALM, BUGZILLA, JIRA)</li>
          <li>Bug Life Cycle</li>
          <li>Test Strategy and Test Planning Document Creation</li>
          <li>Defect Document Creation and Defect Reporting</li>
          <li>Test Data Creation (Equivalence Partitioning, Boundary Value Analysis)</li>
          <li>Industrial Project Demonstration</li>
          <li>Sign-off Document Creation and Test Closure Activities</li>
        </ul>
      </section>

      <section className='container mb-5'>
        <img style={{ width: '100%', height: 'auto' }} src="/assets/training/benefits-manual-testing.webp" alt="Manual Testing Benefits" loading="lazy" />
        <p>
          <strong>To know more or join, Contact Us at +91-9555902032 or write to us at info@thoughtcoders.com</strong>
        </p>
      </section>
    </main>
  );
};

export default Manual;
