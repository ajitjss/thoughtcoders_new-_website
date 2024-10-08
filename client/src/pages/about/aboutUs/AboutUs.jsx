import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

  // Reusable section component
  const AboutLeftImageSection = ({ imageSrc, imageClass, heading, content }) => {
    return (
      <div className="about-us-container-fluid">
        <div className='container'>
          <div className="row">
            <div className="col-md-5">
              <img className={imageClass} src={imageSrc} alt={heading} />
            </div>
            <div className="about-content col-md-7">
              <h2 className='about-heading'>{heading}</h2>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const AboutRightImageSection = ({ imageSrc, imageClass, heading, content }) => {
    return (
        <div className='container p-5'>
          <div className="row">
            <div className="about-content col-md-7">
              <h2 className='about-heading'>{heading}</h2>
              <p>{content}</p>
            </div>
            <div className="col-md-5">
              <img className={imageClass} src={imageSrc} alt={heading} />
            </div>
          </div>
        </div>
    );
  };
  

  return (
    <>

<div className='container profile-section'>
        
          <div className='top-heading'>
            <h5>
              Moz, formerly SEOmoz, has a name that was inspired by organizations like DMOZ, Mozilla, 
              and Chefmoz — all companies that strove for engaging their communities with openness and integrity. 
              From the very beginning, we felt passionately about bringing that same integrity to the frustratingly 
              opaque SEO industry.
            </h5>
          </div>
        </div>
      {/* Rendering the reusable component with different props */}
      <AboutLeftImageSection 
        imageSrc="https://moz.com/images/about/young-rand.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383900&s=8d3bf97971e41e70feeac145b614dcca"
        heading="Our founding"
        content="Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started 
        as a blog and an online community where some of the world's first SEO experts shared their research and 
        ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub 
        of industry expertise transformed into a small consulting firm and led us to create some of our first SEO 
        tools."
        imageClass='about-image1'
      />
      <AboutRightImageSection 
        imageSrc="https://moz.com/images/about/happy-mozzers.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383893&s=27ed6cd25069bbcff90c564d00eec076"
        heading="Early growth & funding"
        content="After a glimpse of the demand, we shifted our focus from consulting to our software, taking 
        our first round of funding in 2007 to power the development of new tools and ideas. By 2009, we tallied 
        our first 5,000 subscribers and codified our core values in the acronym TAGFEE, continuing to lead the 
        industry with our educational content in an effort to demystify SEO (this is also when we started filming 
        Whiteboard Fridays!)."
        imageClass='about-image1'
      />
      <AboutLeftImageSection 
        imageSrc="https://moz.com/images/about/gold-roger-1.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383891&s=ac1de82c1a351b74fc5c0c9ccc630c51"
        heading="Series B Funding"
        content="A series B investment from The Foundry Group propelled our efforts into the broader realm of 
        inbound marketing, a concept that rejects pushy sales in favor of attracting customers with real value. 
        We acquired a Twitter analytics tool called Followerwonk as well as GetListed, a local SEO tool that has 
        evolved into today's Moz Local."
        imageClass='about-image1'
      />
      <AboutRightImageSection 
        imageSrc="https://moz.com/images/about/10-years-of-moz-1.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383888&s=86e1f91c5b2aa0cd1b9813b70c3c108f"
        heading="A new leaf"
        content="With our broader marketing efforts in full swing, we rebranded from SEOmoz to Moz in 2013. 
        We released a suite of campaign-based tools called Moz Analytics that included features for content, 
        social media, and brand management in addition to links and rankings. We also celebrated 10 years in 
        search and welcomed long-time Mozzer Sarah Bird as our new CEO."
        imageClass='about-image1'
      />
      <AboutLeftImageSection 
        imageSrc="https://moz.com/images/about/james-mozplex.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383894&s=66ac4d3fa99b022ded427e20342e48a3"
        heading="To Infinity and Beyond!"
        content="With SEO more important than ever, in 2016 we made a difficult but necessary decision to reverse 
        our expansion into inbound marketing, shifting our strategy back to what we know best: search. 
        We're making dramatic improvements to our core products, Moz Pro and Moz Local, and continue to push for 
        transparency and a clear understanding of an otherwise complex field. Did we mention we're also hiring?"
        imageClass='about-image1'
      />
      <AboutLeftImageSection 
        imageSrc="https://moz.com/images/assets/features/STATMoz-2.png?w=1024&auto=compress%2Cformat&fit=crop&dm=1666734748&s=880645b91980c46e2960de86f4f875c8"
        heading="Better Together"
        content="In 2018 Moz acquired STAT Search Analytics, in order to bring together high-quality, actionable 
        data and insights for marketers, combining Moz’s keyword and link research tools with STAT’s 
        daily rankings and deep SERP analytics."
        imageClass='about-image2'
      />
      <AboutRightImageSection 
        imageSrc="https://moz.com/images/assets/features/moz-group-logo-color.png?w=1024&auto=compress%2Cformat&fit=crop&dm=1666733003&s=358ab71f485f6de742b93ba8f000364a"
        heading="Better Together"
        content="In 2018 Moz acquired STAT Search Analytics, in order to bring together high-quality, actionable 
        data and insights for marketers, combining Moz’s keyword and link research tools with STAT’s 
        daily rankings and deep SERP analytics."
        imageClass='about-image2'
      />
      <div className='container profile-section'>
        <div className='w-50'>
          <div className='profile-main-heading'>
            <h2>Where Does the Name "Moz" Come From?</h2>
          </div>
          <div className='profile-sub-heading'>
            <h5>
              Moz, formerly SEOmoz, has a name that was inspired by organizations like DMOZ, Mozilla, 
              and Chefmoz — all companies that strove for engaging their communities with openness and integrity. 
              From the very beginning, we felt passionately about bringing that same integrity to the frustratingly 
              opaque SEO industry.
            </h5>
          </div>
          <div className='profile'>
            <img className='about-profile-image' src="https://moz.com/images/about/avatars/rand-headshot-300x300.jpg?w=160&h=160&auto=compress%2Cformat&fit=crop&dm=1532459430&s=99b4c94d8050359697052e00c7eba222" alt="" />
            <strong>Rand Fishkin</strong>
            <p>Founder at Moz</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
