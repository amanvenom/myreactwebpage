import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container2">
        
          
        <Link className="heading3" to={{ pathname: "https://github.com/amanvenom?tab=repositories" }} target="_blank">
         <div className="profile">       
         <img src="https://avatars.githubusercontent.com/u/79087445?v=4" className="imag" alt=""/> 
         <h4 className="name">Aman Kumar</h4>         
         </div>
         </Link> 
         
         <div className="acc1"><Link className="td1" to={{ pathname: "https://ankitghildiyal2001.github.io/First-Web-Development-Project/" }} target="_blank"> FIRST WEBSITE - MOTO INFO BY AMAN AND ANKIT </Link>
         
         <br />
         <div class="content1">
         This is my first web development project. We have used HTML, CSS, Bootstrap and Javascript to frame the website and we have deployed it using the Github Repository.
         </div>
         </div> 
         <br />
         <div className="acc1"><Link className="td1" to={{ pathname: "https://ankitghildiyal2001.github.io/Planet-Earth/#/" }} target="_blank"> SECOND WEBSITE - PLANET EARTH </Link>
         
         <br />
         <div class="content1">
         This is my second web development project. We have used ReactJS and React Bootstrap to frame the website using the components and we have deployed it using the Github Repository. This website is fully responsive.
         </div>
         </div> 

    </div>
  )
}
export default About;