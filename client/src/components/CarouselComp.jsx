import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './CarouselComp.css'; 
import SEO from './SEO';

const CarouselComp = () => {
  return (
    <div>
        <SEO
        title="An Independent Software Testing Company-Thoughtcoders"
        description="Get in touch with us at My Blog App. We'd love to hear from you."
        keywords="contact, support, customer service"
      />
      {/* Bootstrap Carousel */}
      <Carousel>
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousels/carousel1.png"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-left">
                <h3>Innovate, Develop, Build <br /> and Redesign World Class Applications</h3>
                <p>Our expert developers build best Applocations for <br /> Web,Mobile (Andriod,IOS and Windows) and desktop Applications.</p>
            <Button className='readmore px-4 py-2' href="/read-more-1">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousels/carousel2.png"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-left">
                <h3>Delivering the Excellence by Smart Automation</h3>
                <p>Committed to deliver high quality applications, <br />best user experience and client satisfaction.</p>
                <Button className='readmore px-4 py-2' href="/read-more-1">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/carousels/carousel3.png"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-left">
                <h3>Learn Continually, There's always "One more thing to Learn"- Steve Jobs</h3>
                <p>Provide best Training on Computer Science Technologies, Automation,Quality Assurance, Programming languages.</p>
                <Button className='readmore px-4 py-2' href="/read-more-1">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
