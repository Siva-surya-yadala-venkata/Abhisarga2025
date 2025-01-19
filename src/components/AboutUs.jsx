import { useEffect, useRef } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
// import JohnSmith from './background.jpg';
// import Andrea from './image1.jpg.jpg';
// import Rocky from './image 2.jpg';
// import Alexander from './image 3.jpg';
// import Afred from './background.jpg';

export default function AboutUs() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initCarousel = () => {
      if (carouselRef.current && window.jQuery) {
        const $ = window.jQuery;
        $(carouselRef.current).owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: true,
          dotsEach: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          center: true,
          navText: [
            `<div class="nav-btn prev-btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>`,
            `<div class="nav-btn next-btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>`
          ],
          responsive: {
            0: {
              items: 1,
              margin: 10,
              center: true
            },
            576: {
              items: 2,
              margin: 15,
              center: false
            },
            992: {
              items: 3,
              margin: 20,
              center: true
            }
          }
        });
      }
    };

    setTimeout(initCarousel, 100);

    return () => {
      if (carouselRef.current && window.jQuery) {
        const $ = window.jQuery;
        $(carouselRef.current).trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <div className="magicians-container">
      <div className="header">
        <h2 className="text-glow">Our Magicians</h2>
      </div>

      <div className="featured-frames">
        <div className="frames-grid">
          <div className="frame">
            <div className="image-container">
              <img className="featured-image" src="./assets/AboutUs/frame1-removebg-preview.png" alt="Tony Stark" />
            </div>
            <h3 className="featured-name">Tony Stark</h3>
            <p className="featured-description">Master of Illusions</p>
          </div>

          <div className="frame">
            <div className="image-container">
              <img className="featured-image" src="./assets/AboutUs/frame1-removebg-preview.png" alt="Tony Stark" />
            </div>
            <h3 className="featured-name">Tony Stark</h3>
            <p className="featured-description">Mind Reader Extraordinaire</p>
          </div>

          <div className="frame">
            <div className="image-container">
              <img className="featured-image" src="./assets/AboutUs/frame1-removebg-preview.png" alt="Tony Stark" />
            </div>
            <h3 className="featured-name">Tony Stark</h3>
            <p className="featured-description">Escape Artist</p>
          </div>
        </div>
      </div>

      {/* <section id="slider">
        <div className="container">
          <h1 className="text-glow"><b>OUR TEAM</b></h1>
          <div className="slider">
            <div ref={carouselRef} className="owl-carousel">
              <div className="slider-card">
                <div className="card-image">
                  <a href="https://www.youtube.com/">
                    <img src={JohnSmith} alt="John Smith" />
                  </a>
                </div>
                <h5 className="card-name"><b>John Smith</b></h5>
              </div>
              <div className="slider-card">
                <div className="card-image">
                  <img src={Andrea} alt="Andrea" />
                </div>
                <h5 className="card-name"><b>Andrea</b></h5>
              </div>
              <div className="slider-card">
                <div className="card-image">
                  <img src={Rocky} alt="Rocky" />
                </div>
                <h5 className="card-name"><b>Rocky</b></h5>
              </div>
              <div className="slider-card">
                <div className="card-image">
                  <img src={Alexander} alt="Alexander" />
                </div>
                <h5 className="card-name"><b>Alexander</b></h5>
              </div>
              <div className="slider-card">
                <div className="card-image">
                  <img src={Afred} alt="Alfred" />
                </div>
                <h5 className="card-name"><b>Alfred</b></h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
