import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import CarouselComp from '../../components/CarouselComp';
import CountUpSection from '../../components/CountUpSection';
import './Home.css'

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(50);  

  useEffect(() => {
    const targetNumber = 90; 
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        } else {
          clearInterval(interval); 
          return prevCount;
        }
      });
    }, 5);  // Speed of the count up (5ms interval)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Carousel*/}
      <CarouselComp />
      <div className="container">
        {/* First Section - Recognized Software Testing Company */}
        <div>
          <div className='mt-5 text-center' style={{ fontFamily: 'georgia, sans-serif' }}>
            <h2 className='font-bold'>Recognized Software Testing Company</h2>
            <h4 className='mb-5'>An Independent Software Testing Company delivering excellence to end users.</h4>
            <h2>Key Points</h2>
          </div>
          <div className="row">
            <CountUpSection
              targetNumber={90}
              imageSrc="/assets/homeimages/keypoints1.webp"
              text="Working on Automation First Approach and successfully automated 90% Software Testing Process, Deployment, and reduced release cycle by 50%."
              borderRadius={{ borderBottomRightRadius: '15px' }}
              countInitialState={23}
            />
            <CountUpSection
              targetNumber={211}
              imageSrc="/assets/homeimages/keypoints2.webp"
              text="Delivered more than 200+ Projects to our customers with excellent Quality and zero bug leakage to Production by our rigorous Software Testing Process."
              borderRadius={{ borderTopLeftRadius: '15px', borderBottomRightRadius: '15px' }}
              countInitialState={144}
            />
          </div>

          <div className="row mt-5">
            <CountUpSection
              targetNumber={1357}
              imageSrc="/assets/homeimages/keypoints3.webp"
              text="Offering Internships and Summer Internships to young professional Graduates. Helping them to contribute in Digital Transformation and join Software Industries."
              borderRadius={{ borderTopLeftRadius: '15px', borderBottomRightRadius: '15px' }}
              countInitialState={1290}
            />
            <CountUpSection
              targetNumber={67}
              imageSrc="/assets/homeimages/keypoints4.webp"
              text="Delivering excellent Software Testing Services for Enterprises, mid size businesses and startups."
              borderRadius={{ borderBottomRightRadius: '15px' }}
              countInitialState={0}
            />
          </div>
        </div>
        {/* Second Section-Bulb */}
        <div style={{ background: '#f3eeeb', padding: '5px', marginTop: '100px' }}>
          <div className="row align-items-center mt-5">
            <div className="col-md-5 text-center text-md-start">
              <div className='d-flex justify-content-center justify-content-md-start align-items-center'>
                <img src="/assets/homeimages/bulb.webp" alt="bulb" style={{ marginTop: '-55px', marginRight: '30px', background: "#f3eeeb", width: '80%' }} />
                <h6 className="ms-2">
                  “There is no alternative to digital transformation. Visionary companies will carve out new strategic options for themselves those that don’t adapt, will fail.”
                  <br /><span>----Jeff Bezos, Amazon</span>
                </h6>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center">
              <div style={{ borderLeft: '1px solid #000', height: '150px' }}></div>
            </div>
            <div className="col-md-5 text-center text-md-start">
              <p>Passionate to help great businesses in Digital Transformation, Quality Assurance, Test Automation, Regression Testing, Offshore QA Team Solutions, End to End Software Testing, and Performance Testing Services.</p>
            </div>
          </div>
        </div>
        {/*Third Section-Case Studies on Software Testing */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'100px' }}>
          <img src="assets/homeimages/bag.webp" alt="bag" style={{ marginBottom: '20px' }} />
          <h2 style={{ marginBottom: '15px', fontFamily: 'georgia,sans-serif' }}>Case Studies on Software Testing, Automation and Performance Testing</h2>
          <p style={{ maxWidth: '850px' }}>
            As we know every Software Application is completely different from other applications
            and while working, different challenges are involved. While working with various clients,
            we solved various complex problems, and these challenges we compiled in our case studies.
            Let’s have a look.
          </p>
        </div>
        {/*Fourth Section-Test Automation */}
        <div className="row">
          <div className="col-md-6">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'100px' }}>
              <img src="/assets/homeimages/case-studies-1.webp" alt="case-studies-1" style={{borderRadius:"5px"}} />
              <h4 style={{ marginTop:"15px", marginBottom: '15px', fontFamily: 'georgia,sans-serif' }}>Test Automation</h4>
              <p>
                Reducing Release Cycle by 50% and increasing test coverage upto 100 % with Robust Test Automation.
              </p>
            </div>
              <Link to='/case-studies/test-automation/'>
              <button className='btn btn-outline-warning' style={{width:'100%'}}>
              Learn more about our services
              </button>
              </Link>
          </div>
          <div className="col-md-6">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'100px' }}>
              <img src="/assets/homeimages/case-studies-2.webp" alt="case-studies-2" style={{width:'573px',height:'325px', borderRadius:'5px'}} />
              <h4 style={{ marginTop:"15px", marginBottom: '15px', fontFamily: 'georgia,sans-serif' }}>Accessibility Testing</h4>
              <p style={{marginBottom:'35px'}}>
                Enabling blessed people to access Digital Applications by our Accessibility Experts..
              </p>
            </div>
            <Link to='/case-studies/accessibility-testing/'>
                <button className='btn btn-outline-warning' style={{width:'100%'}}>
                  Explore our Test Automation case studies
                </button>
            </Link>
          </div>
          <div style={{marginTop:"50px", display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <p style={{width:'1000px'}}>Our Software Testing Services are customizable  as per your need. We offer QA Offshore Services, End to End Testing Teams, Test Automation Services and QA resources. <Link style={{textDecoration:'none'}} to='contact-us'>Let’s get started</Link></p>
          </div>
        </div>
        {/* Fifth Section-Our Partners */}
        <div style={{marginBottom:'100px'}}>
          <div className="text-center" style={{ fontFamily: 'georgia,sans-serif', fontWeight: 400, marginTop: '60px' ,marginBottom:"40px"}}>
            <h1>Our Partners</h1>
          </div>
          <div className="d-flex flex-wrap justify-content-center mt-4">
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/homeimages/image3.webp" alt="partner_1"/>
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/homeimages/image1.webp" alt="partner_2"/>
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/homeimages/image2.webp" alt="partner_3"/>
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/homeimages/image4.webp" alt="partner_4" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/homeimages/image5.webp" alt="partner_5" />
            <img className="img-fluid m-2" style={{ width: '200px', height: '60px' }} src="/assets/homeimages/image6.webp" alt="partner_6" />
          </div>
        </div>
        {/* Sixth Section-Free consultation */}
        <div style={{marginBottom:'100px'}}>
          <div
            style={{   
              backgroundImage: "url('/assets/homeimages/free-consultation-1.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              padding: '50px',
              color:'#fff',
              borderRadius:'10px'
            }}
          >
            <img src="/assets/homeimages/steps.webp" alt="steps" style={{width:'100%', marginLeft:"20px"}}/>
            <div className="row">
              <div className="col-md-3">
                <h3 style={{ fontFamily: 'georgia,sans-serif' }}>Requirement Analysis and Scoping</h3>
                <p>First step starts with Requirement Gathering and Analysis. Our expert consultants will go through requirements, do quick POC, ROI(Return of Investment) and scope finalization for requirements.</p>
              </div>
              <div className="col-md-3">
                <h3 style={{ fontFamily: 'georgia,sans-serif' }}>Milestone and Deliveries</h3>
                <p>On the basis of requirements, our team connect with you set milestones deliveries timeline. Deliveries releases and Software Applications with excellence on time is the base of our business.</p>
              </div>
              <div className="col-md-3">
                <h3 style={{ fontFamily: 'georgia,sans-serif' }}>Test Execution, Bug Reporting and Sign Off</h3>
                <p>Once Software Development Complete then our Experts starts Manual, Automation and API Test Execution. They execute test cases, reports bug and do retesting once bug fixed by Development Team. We perform multiple iteration testing rounds and ensure all the bugs closed. Once all the Bugs(Defects) closed we share Sign Off Report, Test Execution Summary and Automation Results.</p>
              </div>
              <div className="col-md-3">
                <h3 style={{ fontFamily: 'georgia,sans-serif' }}>Go Live Journey</h3>
                <p>Our Software Testing Team actively participate in Application Go Live Journey by contributing in Smoke Testing on Production and feedback sharing. Our commitment to offer best user experience to our end customers</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <hr style={{ width: '90%' }} />
              </div>
              <div style={{marginTop:"10px",marginBottom:"50px", display:'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <p>We believe that innovation, collaboration, and partnerships with the right clients is the only way to thrive together and can give a big boost to success.</p>
                <button className='btn btn-outline-primary px-5 py-2 mt-3'>Our Software Testing Process</button>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <img src="assets/homeimages/free-consultation-2.webp" alt="free-consultation-2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:'10px' }} />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%', 
                transform: 'translate(-75%, -50%)',
                color: '#fff',  
                textAlign: 'left', 
              }}
            >
              <h3 style={{ fontFamily: 'georgia,sans-serif' }}>Free Consultation </h3>
              <p style={{width:'75%'}}>
                Consult Us for Software Testing,  QA Services, Test Automation, DevOps, Application Development,
                Summer Internships and Training Solutions. Our subject matter experts (SMEs) will assist you.
              </p>
            </div>
          </div>
        </div>
        {/* Seventh Section-Testimonials*/}
        <div style={{marginBottom:'100px'}}>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <img src="/assets/homeimages/testimonial-quotes.webp" alt="testimonial-quotes" />
            <h2 style={{ fontFamily: 'georgia,sans-serif' }}>Testimonials</h2>
            <p>To ensure customer satisfaction and business success, you must check testimonials for our Quality Assurance and Testing Automation Services.</p>
          </div>
          <div className="row" style={{marginTop:"50px"}}>
            <div className="col-md-6 d-flex">
              <img 
                src="/assets/homeimages/smarttech-founder.webp"
                alt="smarttech-founder" 
                style={{
                  height: '80px', 
                  width: '80px', 
                }}
              />
              <div className="ms-3" style={{ marginTop: '50px' }}>
                <p>
                  ThoughtCoders have highly innovation QA Automation team which have capability to deliver robust,
                  scalable and easy (less code) framework. Highly recommended for Quality Assurance Services.
                </p>
                <h6><em>______Janmejay Singh, Founder, TantraByte.</em></h6>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <img 
                src="/assets/homeimages/tantrabyte-founder.webp"
                alt="tantrabyte-founder" 
                style={{
                  height: '80px', 
                  width: '80px', 
                }}
              />
              <div className="ms-3" style={{ marginTop: '50px' }}>
                <p>The best thing about ThoughtCoders is they have innovative solution for all sorts of problems. I am sure they will grow at the faster pace.. Keep up the zeal.</p>
                <h6><em>______Avinash Tiwari, Founder, Smartech Education Pvt. Ltd.</em></h6>
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal Line */}
        <div style={{ display: 'flex', justifyContent: 'center'}}>
                <hr style={{ width: '90%',color:'blue' }} />
        </div>
        {/*Software Testing Tools and Technologies */}
        <div>
          <h6 style={{marginLeft:'80px', color:'blue'}}>Software Testing Tools and Technologies</h6>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'100px'}}>
          <h1 style={{fontFamily:'georgia, sans-serif',marginTop:'40px',marginBottom:'40px'}}>Tools and Technologies</h1>
          <img src="/assets/homeimages/tools-and-tech.webp" alt="tools-and-tech" />
        </div>
      </div>
    </div>
  );
};
export default Home;
