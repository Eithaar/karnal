import React from 'react'
import Sphere from './Sphere';


const Contact = ({mode}) => {
  return (
    <div className='contact'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-sm-12 left">
            
            <h4>Let's get <br /> started.</h4>
            <h6> outstanding service and support.</h6>

            <form action="">
              <p>My name is <input type="text" placeholder='Your  Full  Name' />, and I'm looking for developer with a project. You can reach me at <input type="email"  placeholder='Your  Email  Address'/> or call me at <input type="number" placeholder='Your  Contact  Number'/> to get things started. </p>
              <button>-- send info</button>
            </form>

          </div>
          <div className="col-md-5 col-sm-12">
            <div className="txt">
              <i class="fa-solid fa-mobile s-gear"></i>
              <i class="fa-solid fa-phone-volume"></i>
              <h2 className='wall-hit'>contact</h2>
              <h1 className='wall-hit'>Get<span> in touch</span> </h1>
              <p className='wall-hit'>Contact us for outstanding service and support.</p>
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

export default Contact
