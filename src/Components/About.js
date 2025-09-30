import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted destination for quality products</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>ShopEase</strong>, your one-stop online store for 
            electronics, fashion, books, and more. We are passionate about 
            delivering top-notch products at affordable prices, ensuring a 
            seamless shopping experience for our customers.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple - to make shopping convenient, enjoyable, 
            and trustworthy. We strive to connect customers with products they 
            love, while maintaining the highest standards of quality and service.
          </p>
        </div>
        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <ul>
            <li> Wide range of products across categories</li>
            <li>Secure payment options</li>
            <li>Fast and reliable delivery</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About
