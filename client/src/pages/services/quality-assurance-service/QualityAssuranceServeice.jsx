import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import PaymentButton from './PaymentButton';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const QualityAssuranceServeice = () => {


        const OurPricingText=(text,color)=>{
            return(
                <div className="row">
                    <div className="col-md-1">
                        <GiCheckMark style={{color:color}}/>
                    </div>
                    <div className="col-md-11">
                        <span className="card-text">{text}</span>
                    </div>
                </div>
            )
    }

    const QualityAssuranceCards=(imgUrl,count,text)=>{
        return(
            <div className="col-md-3">
                        <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div className="card-body" style={{ position: 'relative', padding: '30px' }}>
                                <img
                                src={imgUrl}
                                alt=""
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '70px',
                                    height: '70px', 
                                    objectFit: 'cover',
                                    borderBottomRightRadius:'20px',
                                    borderTopLeftRadius: '5px',
                                }}
                                />
                                <div
                                style={{
                                    marginTop: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    textAlign: 'center',
                                }}
                                >
                                <h2 style={{fontFamily:"georgia", fontWeight:'600'}}>{count}</h2>
                                <p>{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
  return (
    <div className='container'>
        {/* Home image section */}
        <div className='mb-5d-flex flex-column justify-content-center align-items-center'>
            <img 
                style={{width:'100%',height:'500px',borderRadius:'10px', marginTop:"20px"}} 
                src="/assets/homeimages/quality-assurance-1.png" 
                alt="" 
            />
        </div>
        {/*Our Quality Assurance Expertise */}
        <div className="row mb-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <h2 style={{fontFamily:"georgia,sans-serif", fontWeight:'800'}}>Our Quality Assurance Expertise</h2>
                <p>
                    Due to Digital Disruption, every industry is evolving day by day and implementing Digital 
                    Transformation. Digital Transformation helps every business to scale their services. 
                    But in this competitive environment maintaining great challenge for every business. 
                    But, luckily a trust worthy Quality Assurance Services are available  for you and help you to 
                    deliver excellence to end users.
                </p>
            </div>
            <div className="col-md-6">
                <img 
                style={{width:'100%',height:'500px',borderRadius:'10px'}}
                src="/assets/homeimages/quality-assurance-2.png"  alt="" />
            </div>
        </div>
        {/*Cards Section*/}
        <div className='mb-5'>
            <div style={{ margin: 0, padding: 0 }}>
                <img
                    style={{ width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius:'10px', display: 'block' }}
                    src="/assets/homeimages/quality-assurance-3.png"
                    alt=""
                />
            </div>
            <div style={{ margin: 0, padding: 0, width: '100%', height: '300px', background: '#2C2F50',borderTopLeftRadius:'3px'  }}>
                <div className="row p-5">
                    {QualityAssuranceCards('/assets/homeimages/qlty-card-1.png','132+','Delivered excellent Quality Assurance Services ......')}
                    {QualityAssuranceCards('/assets/homeimages/qlty-card-2.png','12%','Automated more than 75% QA Process ....')}
                    {QualityAssuranceCards('/assets/homeimages/qlty-card-3.png','150+','Delivered 150+ Projects to various clients')}
                    {QualityAssuranceCards('/assets/homeimages/qlty-card-4.png','345+','As markets evolve and emerge, they...')}
                </div>

            </div>
        </div>

        {/* Why Thoughtcoders Quality Assurance Services ?*/}
        <div className='mb-5'>
            <h3 style={{fontFamily:"georgia, sans-serif",fontWeight:'800'}}>
                Why Thoughtcoders Quality Assurance Services ?
            </h3>
            <p>
                We understand the importance of Automation and only automation-focused quality assurance services 
                reduce release time, optimize cost, deliver applications with zero bugs and give the best user 
                experience to end users.
            </p>
        </div>
        <div className="row" style={{marginBottom:'70px'}}>
            <div className="col-md-4 d-flex">
                <img 
                    src="/assets/homeimages/cup.png"
                    alt="" 
                    height="50px"
                />
                <div>
                    <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:'800', marginTop:'5px'}}>Generate Indeas</h5>
                    <p>
                        Qualitest's reliable software quality engineering services help our clients improve their 
                        software's quality and performance while reducing costs and time to market.
                    </p>
                </div>
            </div>
            <div className="col-md-4 d-flex">
                <img 
                    src="/assets/homeimages/cup-2.png"
                    alt="" 
                    height="50px"
                />
                <div>
                    <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:'800', marginTop:'5px'}}>
                        Quality Assurance Services
                    </h5>
                    <p>
                        We know every business needs to work differently so to under let’s connect to understand Quality Assurance, Test Automation, and performance testing. Contact us for free
                        Quality Assurance Consultation.
                    </p>
                </div>
            </div>
            <div className="col-md-4 d-flex">
                <img 
                    src="/assets/homeimages/cup-3.png"
                    alt="" 
                    height="50px"
                />
                <div>
                    <h5 style={{fontFamily:'georgia,sans-serif',fontWeight:'800', marginTop:'5px'}}>
                        Generate Indeas
                    </h5>
                    <p>
                        Provide high quality assurance services and committed to deliver best user experience.
                    </p>
                </div>
            </div>
        </div>

        {/* Dollor Section */}
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src="/assets/homeimages/dollor.png" alt="" style={{marginBottom:'10px'}}/>
            <h4 style={{fontFamily:'georgia,sans-serif'}}>Our Pricing</h4>
            <p>
                We have designed the best pricing plans for Startups, mid-size businesses, and enterprises. 
                we enable our customers to pay per use and are highly customizable.
            </p>
        </div>
        {/* Our Pricing Plan */}
        <div className="row mb-5">
            <div className="col-md-4">
                <div className="card border-primary mb-3">
                    <div className="card-header bg-primary text-center py-3" style={{fontFamily:'georgia',fontSize:'20px', fontWeight:'600'}}>
                        Standard
                    </div>
                    <div className="card-body text-dark">
                        {OurPricingText('Dedicated Quality Analyst (QA) assigned for your Project.','blue')}
                        {OurPricingText('We implement Quality Assurance Process and STLC life Cycle follow.','blue')}
                        {OurPricingText('Test Plan Creation, Test Case writing, Test Case Execution and Defect Reporting.','blue')}
                        {OurPricingText('QA will work standard working hours and ensure overlapping time with the client..','blue')}
                        {OurPricingText('Tools set up, documentation, reporting will be done and process will be adhere.','blue')}
                        {OurPricingText('Bug follow-up with Developers and timely status report shared.','blue')}
                        {OurPricingText('Help Developers in issue recreation and suggesting scenarios for unit testing','blue')}
                        {OurPricingText('Root Cause Analysis will be performed for every defect leakage.','blue')}
                        
                    </div>
                </div>
                <PaymentButton 
                    amountLabel='₹250/Month'
                    amount={250} 
                    currency="INR" 
                    receipt="Receipt for Standard Pack"
                    background='bg-primary'
                    btnbg='btn-outline-warning'
                    width='100%'
                />
            </div>
            <div className="col-md-4">
                <div className="card border-warning mb-3" style={{width:'400px'}}>
                    <div className="card-header bg-warning text-center py-3" style={{fontFamily:'georgia',fontSize:'20px', fontWeight:'600'}}>
                       Most Popular 
                    </div>
                    <div className="card-body text-dark">
                        {OurPricingText('Includes all of Standard Plan.','orange')}
                        {OurPricingText('Domain Specialized Quality Assurance Engineer (QA) assigned for Project.','orange')}
                        {OurPricingText('End to end Quality Assurance, Test Management, and Test Plan executed.','orange')}
                        {OurPricingText('Extended Support Provided in case of urgent delivery.','orange')}
                        {OurPricingText('Responsible for Automation for Sanity and Smoke Test.','orange')}
                        {OurPricingText('Agile/DevOps will be implemented as per client need.','orange')}
                        {OurPricingText('Test Cases, Test plans, Test Execution reports, and Defect documents etc will be created and shared.','orange')}
                        {OurPricingText('Documentation and Knowledge doc created and shared.','orange')}
                    </div>
                </div>
                <PaymentButton 
                    amountLabel='₹550/Month'
                    amount={550} 
                    currency="INR" 
                    receipt="Receipt for Most Popular Pack"
                    background='bg-warning'
                    btnbg='btn-outline-primary'
                    width='97%'
                />
            </div>
            <div className="col-md-4">
                <div className="card border-success mb-3" style={{width:'400px'}}>
                    <div className="card-header bg-success text-center py-3" style={{fontFamily:'georgia',fontSize:'20px', fontWeight:'600'}}>
                       Speed 
                    </div>
                    <div className="card-body text-dark">
                        {OurPricingText('Includes all of Most Popular Plan.','green')}
                        {OurPricingText('Specialized Hybrid (SDET) professional assigned for your Project.','green')}
                        {OurPricingText('End to End Test Execution and Automation Framework will be developed.','green')}
                        {OurPricingText('Automation Test will be executed to Support Functional Testing.','green')}
                        {OurPricingText('Extended Support and additional resources aligned to Support Deliveries.','green')}
                        {OurPricingText('Automation Test Scheduled (Continuous Integration).','green')}
                        {OurPricingText('Test Artifacts will be shared.','green')}
                        {OurPricingText('Knowledge document created and shared with you.','green')}
                        {OurPricingText('Documentation and Knowledge doc created and shared.','green')}
                        
                    </div>
                </div>
                <PaymentButton 
                    amountLabel='₹2500/Month'
                    amount={2500} 
                    currency="INR" 
                    receipt="Receipt for Most Popular Pack"
                    background='bg-success'
                    btnbg='btn-outline-warning'
                    width='97%'
                />
            </div>
        </div>
        <p>Our customized Quality Assurance Services help you to increase your revenue, quick development, and best user experience to end customers. Let’s connect for Quality Assurance Consultation.</p>
        <div style={{marginBottom:'70px', marginTop:"50px"}}>
        <Link to='/'>
          <button className='btn btn-outline-warning text-black'><IoMdArrowRoundBack /> Go Home</button>
        </Link>
      </div>
    </div>
  )
}

export default QualityAssuranceServeice
