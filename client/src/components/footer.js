import React from 'react';
import './navbar.css';

// Paths for the icons
import Logo from '../assets/icons/Logo.svg';
import InstagramIcon from '../assets/icons/instagram-dark.svg';
import FacebookIcon from '../assets/icons/facebook-dark.svg';

const Footer = () => {
  return (
    <div className='text-center text-lg-start text-white testerClassName'>
     
   

      {/* Footer Content */}
      <section className='footer'>
        {/* Column 2: Products */}
        <div className='logo'>
          <img src={Logo} alt='Logo' width="198" />
        </div>

        {/* Additional Rows (if needed) */}
        {/* You can add more rows with the same structure here */}
        <div className='footer-column'>
          <div className='text-uppercase fw-bold mb-4'>
            <i className="fas fa-box me-3" />
            Products
          </div>
          <ul>
            <li>Ford</li>
            <li>Volvo</li>
            <li>Range</li>
          </ul>
        </div>

        <div className='footer-column'>
          <div className='text-uppercase fw-bold mb-4'>
            <i className="fas fa-box me-3" />
            Get in touch:
          </div>
          Centurion, John Voster <br />
          Phone:  012 568 1900
        </div>

        {/* Social Icons */}
        <div className='social-link'>
          <a href='https://www.instagram.com/your-instagram-url' className='text-reset'>
            <img src={InstagramIcon} alt='Instagram' width="60" height="60" />
          </a>
          <a href='https://www.facebook.com/your-facebook-url' className='text-reset'>
            <img src={FacebookIcon} alt='Facebook' width="60" height="60" />
          </a>
        </div>
      </section>

      {/* Bottom Section */}
      <div className='bottom-section'>
        © {new Date().getFullYear()} GlenSpares. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

