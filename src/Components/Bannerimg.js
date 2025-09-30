import React from 'react';
   import image from '../banner.png'; 
   import '../custom.css'; 

   function Bannerimg() {
     return (
       <div className='banner'>
         <img src={image} alt='Banner' />
         <div className="banner-text">
           <h1>Welcome to ShopEase</h1>
           <p>Your one-stop destination for all your shopping needs</p>
         </div>
       </div>
     );
   }
   
   export default Bannerimg;