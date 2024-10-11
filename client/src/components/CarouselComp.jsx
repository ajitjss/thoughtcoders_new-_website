import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './CarouselComp.css'; 
import SEO from './SEO';

const CarouselComp = () => {
  return (
    <div>
      <SEO
        title="An Independent Software Testing Company - Thoughtcoders"
        description="Get in touch with Thoughtcoders for software testing and development services. We ensure quality and client satisfaction."
        keywords="software testing, automation, development, Thoughtcoders"
      />
      {/* Bootstrap Carousel */}
      <Carousel>
        {/* First Slide */}
        <Carousel.Item>
        <img class="d-block w-100" 
          src="/assets/carousels/carousel1-small.webp" 
          srcset="/assets/carousels/carousel1-small.webp 600w, /assets/carousels/carousel1.webp 1200w" 
          sizes="(max-width: 600px) 100vw, 50vw" 
          alt="Developing world-class applications"
        />

          <Carousel.Caption className="carousel-caption-left">
            <h3>Innovate, Develop, Build <br /> and Redesign World-Class Applications</h3>
            <p>Our expert developers build the best applications for Web, Mobile (Android, iOS, and Windows), and desktop.</p>
            <Button 
              className='readmore px-4 py-2' 
              aria-label="Learn more about our services">
              Learn more about our services
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
        <img class="d-block w-100" 
          src="/assets/carousels/carousel2-small.webp" 
          srcset="/assets/carousels/carousel2-small.webp 600w, /assets/carousels/carousel2.webp 1200w" 
          sizes="(max-width: 600px) 100vw, 50vw" 
          alt="Developing world-class applications"
        />
          <Carousel.Caption className="carousel-caption-left">
            <h3>Delivering Excellence Through Smart Automation</h3>
            <p>Committed to delivering high-quality applications, the best user experience, and client satisfaction.</p>
            <Button 
              className='readmore px-4 py-2' 
              aria-label="Discover more about our company">
              Discover more details about our company
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
        <img class="d-block w-100" 
          src="/assets/carousels/carousel3-small.webp" 
          srcset="/assets/carousels/carousel3-small.webp 600w, /assets/carousels/carousel3.webp 1200w" 
          sizes="(max-width: 600px) 100vw, 50vw" 
          alt="Developing world-class applications"
        />
          <Carousel.Caption className="carousel-caption-left">
            <h3>Learn Continually, There's Always "One More Thing to Learn"</h3>
            <p>Providing the best training on Computer Science Technologies, Automation, Quality Assurance, and Programming Languages.</p>
            <Button 
              className='readmore px-4 py-2'
              aria-label="Find out more about our product offerings">
              Find out more about our product offerings
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
