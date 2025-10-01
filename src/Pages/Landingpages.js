import React from 'react'
import bannerImage from '../Banner/banner.jpg';


const Landingpages = () => {
  return (
    <div>
       {/* <div className="banner">
        <img src={bannerImage} alt="Banner" style={{ width: '100%' }} />
      </div>

      <div className="landing-content">
        <h1>Welcome to Our Store</h1>
        <p>Explore our products and offers!</p>
      </div>  */}
      <div className="banner" style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={bannerImage} 
          alt="Banner" 
          style={{ width: '100%', height: '60vh', objectFit: 'cover', filter: 'brightness(70%)' }} 
        />
        
        {/* Text overlay */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}>
            Welcome to Our Store
          </h1>
          <p style={{ fontSize: '1.5rem', fontFamily: "'Roboto', sans-serif", letterSpacing: '0.5px' }}>
            Explore our amazing products and exclusive offers!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landingpages 