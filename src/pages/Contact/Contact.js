import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="container1">

        <Link className="heading3" to={{ pathname: "https://github.com/amanvenom" }} target="_blank">
                <div className="profile">       
                <img src="./images/logo.jpg" className="imag" alt=""/> 
                <h4 className="name">Aman Kumar</h4>         
                </div>
        </Link>   
        <br/>
        <div className="oneline"> you can Contact me on&nbsp; &nbsp;  </div>
 
               <br />
              <span className="cent1"><Link  to={{ pathname: "https://www.facebook.com/amankumar.jha.7921/" }} target="_blank">
               <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="..." height="40px" width="40px" />  </Link> </span>
              
               <span className="cent2"><Link  to={{ pathname: "https://www.instagram.com/aman.venom/" }} target="_blank">
               <img src="https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-gif-dot-flashing.gif" alt="..." height="40px" width="40px" />  </Link>  </span>

               <span className="cent2"><Link  to={{ pathname: "https://wa.me/919458925495" }} target="_blank">
               <img src="http://www.niscon.in/assets/img/img.gif" alt="..." height="40px" width="40px" />  </Link>  </span>
             
              
    </div>
  )
}
export default Contact;