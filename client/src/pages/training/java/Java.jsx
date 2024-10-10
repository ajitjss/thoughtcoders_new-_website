import React from 'react';
import './Java.css';

const Java = () => {
  return (
    <main className='container py-5'>
      <section className="row">
        <article className="col-md-7 manual-content">
          <h1 className='kt-heading'>Core Java</h1>
          <p>  
            Core Java training focuses on fundamental Java programming concepts, providing a solid foundation for 
            building applications. The course covers essential topics such as object-oriented programming (OOP), 
            data types, operators, control flow, classes, objects, inheritance, polymorphism, exception handling, 
            and collections. Participants also learn about Java’s standard libraries, file handling, and 
            multithreading. Through practical exercises and hands-on coding, trainees gain the skills to develop, 
            debug, and deploy Java applications. Core Java training is ideal for beginners and those looking to 
            strengthen their programming knowledge, as it prepares learners for advanced Java frameworks and 
            software development roles.
          </p>
          <div className="training-button mt-3">
            <button className="btn btn-primary me-3">Get In Touch</button>
            <button className="btn btn-outline-dark">Read More</button>
          </div>
        </article>
        <figure className="col-md-5">
          <img src="https://itstu2pro.com/wp-content/uploads/2023/11/Core-Java-Pro.jpg" alt="Core Java Diagram" loading="lazy" />
        </figure>
      </section>
      
      <section className="py-5">
        <div className="container">
        <h2 className="kt-heading">Core Java Training</h2>
          <p className="kt-text">
            Java is the best enterprise level  programming language which gives flexibility to implement Object 
            Oriented Concepts and very useful Collections classes and methods. This feature makes Java much 
            popular among developer community and preferred programming language for  Application Development. 
            Core Java is the popular choice for Test Automation and Quality Assurance Tool Development.
            This training programmed is design for fresher’s or zero knowledge on Core Java. Training programmed 
            is comprehensive and intuitive. This training will be deliver on industrial projects and client use 
            case.
          </p>
          <ul>
            <li>Introduction of Programming Language and Java.</li>
            <li>Java Basic Programming.</li>
            <li>OOPs Concepts and Why it’s important.</li>
            <li>Core Java Training and Java Framework Development</li>
            <li>Algorithm and Programming Challenges Discussion.</li>
            <li>Utility and Tool Development.</li>
            <li>API Development and Debugging.</li>
            <li>Java Design Pattern and Implementation.</li>
            <li>Best Practices for Code Writing.</li>
            <li>Code Review Technique and Tools.</li>
            <li>Java Framework and Libraries overview.</li>
          </ul>
          <a
            href="/assets/download/Core-Java-Training-Syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning mt-3"
          >
            Download Core Java Training Syllabus
          </a>
        </div>
      </section>

      <section className="container mt-1 mb-5">
        <h4 className="kt-heading">Features of Core Java Training Programs:</h4>
        <p>
          ThoughtCoders training programs are designed from beginning level to advance level, very intuitive and 
          with rich content. Even a beginner can learn from zero to expert level. Our training course features 
          are mentioned below:
        </p>
        <ul>
          <li>Training demonstrated over Live Applications and industrial projects.</li>
          <li>During training you will get time to work on Industrial Applications</li>
          <li>Our training session contains 80% live Coding/Practical and 20% Theory</li>
          <li>Study Notes, Assignment and Solution provided during trainings</li>
          <li>Fully updated training program with latest changes.</li>
          <li>Training Programs are designed and reviewed by respective professionals</li>
          <li>Job assistance provided and additional support provided till Job offer</li>
          <li>Training Certificate will be provided once after Course Completion</li>
          <li>Resume Building, recommendation, profile building on Linked In and Job Portal Included</li>
          <li>Mock Interview session conducted</li>
          <li>Interview Questions Include in Training</li>
          <li>Rich blogs and code on technologies</li>
          <li>On Job support provided if required</li>
        </ul>
      </section>
    </main>
  );
};

export default Java;
