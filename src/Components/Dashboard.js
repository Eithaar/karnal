import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import dp from '../Images/dp.jpg';
import hoverSound from '../Music/hover.wav'; // Import the sound file
// import Sphere from './Sphere';

const Home = (props) => {
  let location = useLocation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showLinks, setShowLinks] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    const audio = new Audio(hoverSound);
    audio.play().catch((error) => console.log(error));
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const toggleLinks = () => {
    if (window.innerWidth <= 426) {
      let list = document.querySelectorAll(".right");
      let containers = document.querySelectorAll(".container-fluid");
      let socialIcons = document.querySelectorAll(".icon");
      let profile = document.querySelectorAll(".dp .crl img");
      let txt = document.querySelectorAll(".txt");
      let header = document.querySelectorAll(".side-bar");
      let scroll = document.querySelectorAll(".scroll");
      let user = document.querySelectorAll(".p-data");
  
      const boxShadowColor = props.mode === 'light' ? '0 0 0 1.5px #282828' : '0 0 0 1.5px #e0dbdb';
      const borderColor = props.mode === 'light' ? '#e0dbdb' : '#1b1b1b';
  
      setShowLinks((prevShowLinks) => {
        if (!prevShowLinks) {
  
          user.forEach((user) => {
            user.style.display = "block"; 
            user.style.marginLeft = '20px';
          });
  
          setTimeout(() => {
            user.forEach((user) => {
              user.classList.add("show");
            });
          }, 500); // Delay to ensure the transition is triggered
  
          scroll.forEach((scroll) => {
            scroll.classList.add("hide");
          });
  
          header.forEach((header) => {
            header.style.backgroundColor = "#6a0606";
          });
  
          list.forEach((listItem) => {
            listItem.scrollTop = 0;
            listItem.style.height = "40%";
            listItem.style.overflow = "hidden";
            listItem.style.transform = "scale(0.7) translateX(-180px) rotateY(40deg)";
          });
  
          containers.forEach((container) => {
            container.style.backgroundColor = "#6a0606";
          });
  
          // Show icons with a smooth transition
          socialIcons.forEach((icon) => {
            icon.style.display = "flex";
            setTimeout(() => {
              icon.classList.add("show");
            }, 300); // Small delay to ensure display is applied before opacity
          });
  
          txt.forEach((text) => {
            text.style.transform = "rotateY(-20deg)";
            text.style.boxShadow = "25px 0px 0px -5px rgba(255, 255, 255, 0.264), 50px 0px 0px -10px rgba(255, 255, 255, 0.264)";
          });
  
          profile.forEach((profileItem) => {
            profileItem.style.height = "80px";
            profileItem.style.width = "80px";
            profileItem.style.top = "0px";
            profileItem.style.borderWidth = "3.5px";
            profileItem.style.borderColor = "#6a0606";
            profileItem.style.boxShadow = "0 0 0 3px";
            profileItem.style.marginLeft = '20px';
          });
  
        }
        
        
        
        
        
        
        else {
          user.forEach((user) => {
            user.classList.remove("show");
          });
  
          setTimeout(() => {
            user.forEach((user) => {
              user.style.display = "none";
            });
          }, 5); // Wait for transition to complete before hiding
  
          setTimeout(() => {
            scroll.forEach((scroll) => {
              scroll.classList.remove("hide");
            });
          }, 1000);
  
          header.forEach((header) => {
            header.style.backgroundColor = props.mode === 'light' ? '#e0dbdb' : '#1b1b1b';
          });
  
          list.forEach((listItem) => {
            listItem.style.height = "100vh";
            listItem.style.overflow = "scroll";
            listItem.style.transform = "scale(1) translateX(0px)";
          });
  
          containers.forEach((container) => {
            container.style.backgroundColor = props.mode === 'light' ? '#e0dbdb' : '#1b1b1b';
          });
  
          // Hide icons with a smooth transition
          socialIcons.forEach((icon) => {
            icon.classList.remove("show");
            setTimeout(() => {
              icon.style.display = "none"; // Hide after transition
            }, 5); // Match the duration of the opacity transition
          });
  
          txt.forEach((text) => {
            text.style.transform = "rotateY(0deg)";
            text.style.boxShadow = "none";
          });
  
          profile.forEach((profileItem) => {
            profileItem.style.height = "40px";
            profileItem.style.width = "40px";
            profileItem.style.top = "-10px";
            profileItem.style.borderWidth = "2px";
            profileItem.style.borderColor = borderColor;
            profileItem.style.boxShadow =  "0 0 0 1.5px";
            profileItem.style.boxShadow =  boxShadowColor;
            profileItem.style.marginLeft = '0px';
          });
        }
  
        return !prevShowLinks;
      });
    }
  };
  
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-bar">

            <div className="dp">
              <h4>Karnal Verma</h4>
              <div className="crl">
                <img src={dp} onClick={toggleSidebar} alt="" />
              </div>

              <i className="fa-solid" onClick={toggleLinks}>
                {showLinks ? '✕' : (
                  <div className="hamburger-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </i>

              <p>Based in India, I'm a frontend developer </p>

            </div>

            <div className="p-data">
              <h5>Karnal Verma</h5>
              <h6>front-end developer</h6>
            </div>

            <div className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
              <div className="sidebar-content">
                <div className="profile-pic">
                  <img src={dp} alt="Profile" />
                </div>
                <h4>Karnal Verma</h4>
                <h5>front-end developer</h5>
                <p>Contact No: +91 797 0562 200</p>
                <p>E-mail ID: karnalv16@gmail.com</p>

                <button className="close-btn" onClick={toggleSidebar}>
                  <i className="fa-solid fa-xmark"></i> Close
                </button>
              </div>
            </div>

            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i id="icon" className="fa-solid fa-moon"  onClick={props.toggleMode }></i>
            </div>

            <div className={`links ${showLinks ? 'show' : 'hide'}`}>
              <Link to="/home" className={`${location.pathname === "/home" ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave} onClick={toggleLinks}><i class="fa-solid fa-house-chimney"></i>Home
              </Link>
              <Link to="/about" className={`${location.pathname === "/about" ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave} onClick={toggleLinks}><i class="fa-solid fa-address-card"></i>About
              </Link>
              <Link to="/resume" className={`${location.pathname === "/resume" ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave} onClick={toggleLinks}><i class="fa-solid fa-file"></i>
                Resume
              </Link>
              <Link to="/project" className={`${location.pathname === "/project" ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave} onClick={toggleLinks}><i class="fa-solid fa-diagram-project"></i>
                Project
              </Link>
              <Link to="/contact" className={`${location.pathname === "/contact" ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave} onClick={toggleLinks}><i class="fa-solid fa-address-book"></i>
                Contact
              </Link>
            </div>

            <button className='hire'>hire me</button>

          </div>

          <div className="col-md-10 col-sm-12 right">
            {/* <Sphere /> */}
            <Outlet context={{ hoveredCard }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
