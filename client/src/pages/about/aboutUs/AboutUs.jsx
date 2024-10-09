import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

  // Reusable section component
  const AboutLeftImageSection = ({ imageSrc, imageClass, heading, content }) => {
    return (
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 text-center">
              <img className={imageClass} src={imageSrc} alt={heading} />
            </div>
            <div className="col-lg-7 col-md-12">
              <h2 className="about-heading">{heading}</h2>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AboutRightImageSection = ({ imageSrc, imageClass, heading, content }) => {
    return (
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2 className="about-heading">{heading}</h2>
              <p>{content}</p>
            </div>
            <div className="col-lg-5 col-md-12 text-center">
              <img className={imageClass} src={imageSrc} alt={heading} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container profile-section text-center">
        <h5>
          Moz, formerly SEOmoz, has a name that was inspired by organizations like DMOZ, Mozilla, 
          and Chefmoz — all companies that strove for engaging their communities with openness and integrity. 
          From the very beginning, we felt passionately about bringing that same integrity to the frustratingly 
          opaque SEO industry.
        </h5>
      </div>

      {/* Sections with alternating image and text */}
      <AboutLeftImageSection 
        imageSrc="https://moz.com/images/about/young-rand.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383900&s=8d3bf97971e41e70feeac145b614dcca"
        heading="Our founding"
        content="Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the world's first SEO experts shared their research and ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools."
        imageClass='about-image'
      />
      <AboutRightImageSection 
        imageSrc="https://moz.com/images/about/happy-mozzers.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383893&s=27ed6cd25069bbcff90c564d00eec076"
        heading="Early growth & funding"
        content="After a glimpse of the demand, we shifted our focus from consulting to our software, taking our first round of funding in 2007 to power the development of new tools and ideas. By 2009, we tallied our first 5,000 subscribers and codified our core values in the acronym TAGFEE, continuing to lead the industry with our educational content."
        imageClass='about-image'
      />
      <AboutLeftImageSection 
        imageSrc="https://moz.com/images/about/gold-roger-1.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383891&s=ac1de82c1a351b74fc5c0c9ccc630c51"
        heading="Series B Funding"
        content="A series B investment from The Foundry Group propelled our efforts into the broader realm of inbound marketing, rejecting pushy sales in favor of attracting customers with real value. We acquired tools like Followerwonk and GetListed, which evolved into today's Moz Local."
        imageClass='about-image'
      />
      <AboutRightImageSection 
        imageSrc="https://moz.com/images/about/10-years-of-moz-1.jpg?w=1024&auto=compress%2Cformat&fit=crop&dm=1532383888&s=86e1f91c5b2aa0cd1b9813b70c3c108f"
        heading="A new leaf"
        content="With broader marketing efforts in full swing, we rebranded from SEOmoz to Moz in 2013. We released Moz Analytics and celebrated 10 years in search with Sarah Bird as our new CEO."
        imageClass='about-image'
      />
      
      {/* Profile section */}
      <div className="container profile-section">
        <div className="text-center">
          <h2>Where Does the Name "Moz" Come From?</h2>
          <h5>
            Moz, formerly SEOmoz, has a name inspired by organizations like DMOZ, Mozilla, and Chefmoz. 
            From the very beginning, we felt passionately about bringing that same integrity to the SEO industry.
          </h5>
          <div className="profile">
            <img className="profile-image" src="https://moz.com/images/about/avatars/rand-headshot-300x300.jpg?w=160&h=160&auto=compress%2Cformat&fit=crop&dm=1532459430&s=99b4c94d8050359697052e00c7eba222" alt="Rand Fishkin" />
            <strong>Rand Fishkin</strong>
            <p>Founder at Moz</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
