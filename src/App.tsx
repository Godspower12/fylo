import React, { useState } from 'react';
import "./Styles/style.css";
import Logo from "./Assets/images/logo.svg"
import MainImg from "./Assets/images/illustration-intro.png";
import AccessAnywhere from "./Assets/images/icon-access-anywhere.svg";
import Security from "./Assets/images/icon-security.svg";
import Colaboration from "./Assets/images/icon-collaboration.svg";
import AnyFile from "./Assets/images/icon-any-file.svg";
import StayProductive from "./Assets/images/illustration-stay-productive.png";
import arrow from "./Assets/images/icon-arrow.svg";
import Background from "./Assets/images/bg-curvy-desktop.svg";
import BackgroundMobile from "./Assets/images/bg-curvy-mobile.svg";
import BgQuote from "./Assets/images/bg-quotes.png";
import Profile1 from "./Assets/images/profile-1.jpg";
import Profile2 from "./Assets/images/profile-2.jpg";
import Profile3 from "./Assets/images/profile-3.jpg";
import Address from "./Assets/images/icon-location.svg";
import Email from "./Assets/images/icon-email.svg";
import Phone from "./Assets/images/icon-phone.svg";
import Fb from "./Assets/socials/facebook.jpg";
import Twitter from "./Assets/socials/twitter.png";
import Insta from "./Assets/socials/insta.png";


function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
const handleChange = (e:any) => {
 const {value} = e.target;
 setInput(value);
}
  const handleClick = (e:any):void => {
    if(!input) {
      setError(true)
    }else {
      setError(false)

    }
  }

  return (
    <>
    <div className="App">
      <div className="background-desktop">
      <img src= {Background} alt="background" />
  
</div>
      <div className="background-mobile">
      <img src= {BackgroundMobile} alt="background" />
  
</div>
      <header>
        <div className="logo">
          <img src= {Logo} alt="logo" />
        </div>
        <div className="menu">
            <ul>
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
            </ul>
          </div>
      </header>
      <div className="body">
        <img src= {MainImg} alt="MainImg" />
        <h1>All your files in one secure location, accessible anywhere.
</h1>
<p>Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.</p>
  <button>Get Started</button>
     
    
     
     </div>

<div className="display-section">


     <div className="display-section-1">
      <div className="display-1">
      <img src= {AccessAnywhere} alt="access" />
      <h3>Access your files, anywhere</h3>
      <p>The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.</p>
  </div>
      <div className="display-2">
      <img src={Security} alt="access" />
      <h3>Security you can trust</h3>
      <p>2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.</p>
      </div>
      <div className="display-3">
      <img src={Colaboration} alt="access" />
      <h3>Real-time collaboration</h3>
      <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.</p>
      </div>
      <div className="display-4">
      <img src={AnyFile} alt="access" />
      <h3>Store any type of file</h3>
      <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.</p>
      </div>

     </div>
     <div className="display-section-2">
     <img src={StayProductive} alt="stay-productive" />
     <div className="stay-productive">
     <h1>Stay productive, wherever you are</h1>
     {/* <h1></h1> */}
      <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
  <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
  <p><span>See how Fylo works <img src={arrow} alt="arrow" /></span></p>
     </div>
     </div>

     <div className="display-section-3">
      <img src= {BgQuote} alt="BgQuote" />
      <div className="cards">
        <div className="card">
          <p>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
         become a well-oiled collaboration machine.
          </p>
          <div className="designation">
            <img src={Profile1} alt="profile" />
            <div className="name-tag">
            <h5>Satish Patel</h5>
            <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
         become a well-oiled collaboration machine.
          </p>
          <div className="designation">
            <img src={Profile2} alt="profile" />
            <div className="name-tag">
            <h5>Bruce McKenzie</h5>
            <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
         become a well-oiled collaboration machine.
          </p>
          <div className="designation">
            <img src={Profile3} alt="profile" />
            <div className="name-tag">
            <h5>Iva Boyd</h5>
            <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
     </div>

    
     </div> <div className="display-section-4">
    <div className="footer-card">
      <h1>Get early access today</h1>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
  <div className="actions">
    <div className="inputfield">
    <input onChange = {handleChange} type="text" name ="email" placeholder='email@example.com' />
    {error && <p>Please enter a valid Email</p>}
    </div>
    <div className='btn'>
    <button onClick={handleClick}>Get Started for Free</button>
    </div>
  </div>
    </div>
    
     <div className="footer">
     <img src={Logo} alt="logo" />
     <div className="footer-lists">
      <div className="footer-list1">
     <img src={Address} alt="address" />
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua</p>
      </div>
      <div className="footer-list2">
     <span><img src={Phone} alt="phone" />+1-543-123-4567</span>
     <span><img src={Email} alt="Email" />example@fylo.com</span>
     
       
      </div>
      <div className="footer-list3">
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-list4">
        <ul>
          <li> Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="footer-list5">
        <img src={Fb} alt="fb" className="fb"/>
        <img src={Twitter} alt="twitter" />
        <img src={Insta} alt="insta" />
      </div>
     </div>
     </div>
     </div>
    </div>
    </>
  );
}

export default App;
