import React from 'react';
import Sphere from './Sphere';
import coverImg from '../Images/cover-img.png';
import dp from '../Images/dp.jpg';



// Function to calculate age in years, months, and days
const calculateAge = (birthDate) => {
  const now = new Date();
  const birth = new Date(birthDate);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  // Adjust for negative months
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Adjust for negative days
  if (days < 0) {
    months -= 1;
    // Get the previous month to calculate remaining days
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  return { years, months, days };
};

const Resume = ({ mode }) => {

  // Calculate age from birthdate
  const birthDate = '2002-09-12';
  const age = calculateAge(birthDate);

  return (
    <div>
      <div className='resume'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-sm-12 left">
              <div className="top">
                <img src={coverImg} alt="" />
                <img id='dp' src={dp} alt="" />
              </div>

              <div className="name">
                <h4>Karnal Verma</h4>
                <h3>Web Developer</h3>

                <div className="birth d-flex">
                  <div className="dis">
                    <h6>{age.years}</h6>
                    <h5>years</h5>
                  </div>
                  <div className="dis">
                    <h6>{age.months}</h6>
                    <h5>months</h5>
                  </div>
                  <div className="dis">
                    <h6>{age.days}</h6>
                    <h5>days</h5>
                  </div>
                </div>
              </div>

              <p>
                As a Web Developer, I am a passionate and dedicated professional
                with a strong technical background and a keen eye for detail. I am
                driven by the desire to create innovative and high-performing
                websites that deliver exceptional user experiences.
              </p>

              <div className="con-btn">
                <button>Contact me</button>
                <button>Download CV</button>
                <button className='download'>
                  <i className="fas fa-download"></i>
                </button>
              </div>

              <h5>Personality : <span> Introvert</span></h5>
              <h5>Nature : <span> Calm</span></h5>
              <h5>Interaction : <span> Friendly</span></h5>
              <h5>Languages : <span> Hindi , English</span></h5>
              <h5>Expertise : <span>Creative & Logical Thinker , Leadership</span> </h5>
              <h5>Skills : <span>Photoshop, Figma, Bootstrap, HTML, CSS, Javascript, PHP, Mysql, React</span> </h5>
              {/* <h5>Improving : <span>Figma, React, Blender</span> </h5> */}

              <h4 id='edu' >Education</h4>
              <div className="edu">
                <div className="dots">
                  <div className="dot"><h6>2018</h6></div>
                  <div className="dot"><h6>2020</h6></div>
                  <div className="dot"><h6>2023</h6></div>
                </div>
                <div className="up-side">
                  <h6>Start</h6>
                  <h5>College</h5>
                  <h4>Maa Bhadrakali College <br /> Itkhori</h4>
                </div>
                <div className="down-side">
                  <div className='lyr'>
                    <h5>School</h5>
                    <h4>Surekha Prakash Bhai <br /> Public School</h4>
                  </div>
                  <div className='lyr-2'>
                    <h3>Graduation</h3>
                    <h2>Gossner College Ranchi, <br /> Ranchi University</h2>
                  </div>
                </div>
              </div>



            </div>

            <div className="col-md-5 col-sm-12">
              <div className="txt">
                <i className="fa-solid fa-file s-gear"></i>
                <i className="fa-solid fa-folder"></i>
                <h2 className='wall-hit'>CV</h2>
                <h1 className='wall-hit'>
                  Res<span>ume</span>
                </h1>
                <p className='wall-hit'>Innovative solutions and exceptional results.</p>
                <div className="sphere">
                  <Sphere mode={mode} /> {/* Pass mode to Sphere */}
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
    </div>
  );
};

export default Resume;
