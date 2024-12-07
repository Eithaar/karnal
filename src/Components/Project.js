// Project.js
import React from 'react';
import Slider from 'react-slick';
import p1 from '../Images/p1.png'; // Ensure this path is correct
import Sphere from './Sphere';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div className='CustomPrevArrow'
    
    onClick={onClick}
  >
    <i className="fa fa-chevron-left" style={{ color: 'white', fontSize: '16px' }}></i>
  </div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div className='CustomNextArrow' onClick={onClick} >
    <i className="fa fa-chevron-right" style={{ color: 'white', fontSize: '16px' }}></i>
  </div>
);

const Project = ({ mode }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: dots => (
      <div className="dots-container"
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '20px',
          width: '57%',
          display: 'flex',
          justifyContent: 'end',
          zIndex: 3,
          // background: 'red',
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: 'flex', listStyle: 'none' }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ margin: '0 5px' }}>
              {React.cloneElement(dot, {
                style: {
                  ...dot.props.style,
                  backgroundColor: index === currentSlide ? '#880000' : 'gray',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  transition: 'all .3s ease-in-out',
                  
                }
              })}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background 0.3s ease',
          color: '#000',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        {i + 1}
      </div>
    ),
    afterChange: handleAfterChange
  };

  const slides = [
    { 
      id: 1, 
      title: "Sophia Olsen", 
      name: "A personal portfolio", 
      image: p1,
      url: "https://sophiaolsen.com" 
    },
    { 
      id: 2, 
      title: "Momentum", 
      name: "A freelance company", 
      image: p1,
      url: "https://momentumfreelance.com" 
    },
    { 
      id: 3, 
      title: "Living Fitness", 
      name: "A gym management system", 
      image: p1,
      url: "https://livingfitness.com" 
    },
  ];

  return (
    <div className='project'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-sm-12 left">
            <h4>Let's take <br />a look.</h4>
            <h6>Driving successful projects.</h6>

            <div className="slider-wrapper">
              <Slider {...sliderSettings}>
                {slides.map((slide) => (
                  <div key={slide.id} className="slide">
                    <img src={slide.image} className="slide-img-top" alt={slide.title} />
                    <div className="overlay">
                      <h5 className="slide-title">{slide.title}</h5>
                      <p className="slide-text">{slide.name}</p>
                      <a href={slide.url} className="visit-site-button" target="_blank" rel="noopener noreferrer" >
                        Visit Site
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="txt">
              <i className="fa-solid fa-trowel-bricks s-gear"></i>
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <h2 className='wall-hit'>works</h2>
              <h1 className='wall-hit'>Pro<span>ject</span></h1>
              <p className='wall-hit'>Driving successful projects with innovation and excellence.</p>
              <div className="sphere">
                <Sphere mode={mode} /> 
              </div>
            </div>
            <div className="scroll">
              <div className="arrow"></div>
              <h2>scroll</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
