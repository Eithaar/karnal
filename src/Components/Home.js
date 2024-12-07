import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Sphere from './Sphere';

const Home = ({ mode }) => { // Accept mode as a prop
  const { hoveredCard } = useOutletContext();

  const cardContents = ["Home", "About", "Resume", "Project", "Contact"];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.setProperty('--delay', index + 1);
    });
  }, []);

  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="card-container ">
                {cardContents.map((content, index) => (
                  <div
                    key={index}
                    className={`card fade-up ${hoveredCard === index + 1 ? 'hover' : ''} `}
                    id={`card${index + 1}`}
                  >
                    <div className="card-label">{content}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="txt fade-up">
                <i className="fa-solid fa-gear s-gear "></i>
                <i className="fa-solid fa-gear  "></i>
                <h2 className='wall-hit'>frontend</h2>
                <h1 className='wall-hit'>Dev<span>eloper</span> </h1>
                <p className='wall-hit'>welcome to the creative portfolio.</p>
                <div className="sphere">
                  <Sphere mode={mode} /> {/* Pass mode to Sphere */}
                </div>
              <h4 className="sign">Karnal Verma</h4>

              </div>

            </div>
            {/* <button>hire me</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
