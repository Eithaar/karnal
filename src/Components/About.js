import React from 'react'
import Sphere from './Sphere';
import aboutImg from '../Images/10.png';


const About = ({ mode }) => {
  return (
    <div className='about'>
      <div className="container-fluid">
        <div className="row">


          <div className="col-md-7 col-sm-12">
            <div className="left">

              <div className="first">
                <h1> karnal <br /> <span> verma </span>  </h1>
                <img src={aboutImg} alt="" />
              </div>
              <h2>Based in India, I'm a frontend developer </h2>
              

              <p>I recently graduated with a Bachelor of Science in Information Technology from Ranchi University. During my studies, I developed a strong foundation in various aspects of IT, including programming, database management, and network security.</p>
              <p>While at university, I actively participated in several projects that allowed me to apply my theoretical knowledge in practical scenarios. One notable project was Momemtum Freelance  , where I was lead character of project. This experience not only enhanced my technical skills but also taught me the importance of teamwork and effective communication.</p>
              
              <button>Download CV</button>
              <button>get in touch</button>

              <div className="d-flex text">
                <i class="fa-solid fa-user-secret"></i>
                <h3>about</h3>
              </div>
              <p>In my role as a web designer, I thrive on creating visually captivating and user-centric websites that offer an intuitive and immersive experience. With an acute attention to detail and a solid grasp of design principles, I excel in crafting layouts that are both aesthetically stunning and highly functional.</p>
              <p>Functioning as a frontend developer, I excel in converting design visions into responsive and interactive web applications using HTML, CSS, JavaScript and React. My technical acumen ensures that websites not only appear impressive but also perform flawlessly across diverse devices and browsers. </p>

              <div className="d-flex text">
                <i class="fa-solid fa-fire-flame-curved"></i>
                <h3>Passion</h3>
              </div>

              <h6>Gaming</h6>
              <p>My passion for racing games is strong, filled with memories, excitement, and a drive to be the best. From the first time I held a controller and started a race, I was hooked by the exciting world of virtual racing.</p>

              <div className="d-flex text">
                <i class="fa-brands fa-uniregistry"></i>
                <h3>unique me</h3>
              </div>
              <p>As a developer, I bring a unique blend of innovative problem-solving skills, adaptability across various domains, and a commitment to lifelong learning. My collaborative nature fosters effective teamwork, while my genuine passion for coding drives me to constantly seek out new challenges. </p>
            </div>
          </div>


          <div className="col-md-5 col-sm-12">
            <div className="txt">
              <i class="fa-solid fa-user-secret s-gear"></i>
              <i class="fa-solid fa-user"></i>
              <h2 className='wall-hit'>about</h2>
              <h1 className='wall-hit'>Me<span> / Myself</span> </h1>
              <p className='wall-hit'>captures my experiences, passions, and what makes me unique.</p>
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
  )
}

export default About
