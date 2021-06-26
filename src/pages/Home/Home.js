import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">  

          <Link className="heading3" to={{ pathname: "https://github.com/amanvenom" }} target="_blank">
         <div className="profile">       
         <img src="./images/logo.jpg" className="imag" alt=""/> 
         <h4 className="name">Aman Kumar</h4>         
         </div>
         </Link> 

         <hr className="hline" />
        
         {/* <div className="content">  */}
             <span className="forleft"><img className="imag1" src="https://wallpaperaccess.com/full/2504913.jpg" alt=".." height="170px" width="180px"/></span>
             <div className="place">
                {/* <br /> */}
                <p > <Link className="heading3" to={{ pathname: "https://en.wikipedia.org/wiki/Dehradun" }} target="_blank"> DEHRADUN </Link> </p> 
                
                {/* <br /> */}
                Its a place in the North India and is the capital of Uttarakhand. I have spent my childhood here and have a lot of memories and good vibes relating to this place and this place has been an inspiration abd fun!! I have enjoyed living in here. I usually live in Pauri Garhwal most of my days.The weather is quite pleasant in there during summers and quite cold during winters. 
             </div>

                 <br /><br />
            
                 <span className="forleft"><img className="imag1" src="https://thumbs.dreamstime.com/b/badrinath-town-alkananda-river-flowing-64354569.jpg" alt=".." height="170px" width="180px"/></span>
             <div className="place">
                {/* <br /> */}
                <p > <Link className="heading3" to={{ pathname: "https://en.wikipedia.org/wiki/Pauri_Garhwal_district" }} target="_blank"> PAURI GARHWAL </Link> </p> 
                
                {/* <br /> */}
                Its a place in the North India in Uttarakhand. This place gives me one of the finest moments and landscapes by entertaining us with the serenity of nature and hence this place is one of my finest places i like to live in. Eternal peace is a slave in the world of nature and hence this place gains a huge respect in my heart. It has got its own traditions and culture which makes this place even more essenceful. 
             </div>

       
    </div>   
  )
}
export default Home;