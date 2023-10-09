import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './navbar.css';

//paths for the icons
import Logo from '../assets/icons/Logo.svg';
import InstagramIcon from '../assets/icons/instagram-dark.svg';
import FacebookIcon from '../assets/icons/facebook-dark.svg';

const Footer = () => {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-white testerClassName'>
      {/* Top Section */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* Logo */}
        <div className='logo'>
          <img src={Logo} alt='Logo' width="198" />
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

      {/* Footer Content */}
      <section className='footer'>
  <MDBContainer className='text-center text-md-start mt-5 alignFooterCol1'>
    <MDBRow className='mt-3'>
      {/* Column 1: Logo */}
      <MDBCol md="3" lg="3" xl="3" className='footer-column'>
        <div className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          GlenSpares
        </div>
        {/* Add your company info here */}
      </MDBCol>
      {/* Column 2: Products */}
      <MDBCol md="3" lg="3" xl="3" className='footer-column'>
        <div className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="box" className="me-3" />
          Products
        </div>
        <ul>
          <li>Ford Mustang Convertible LX</li>
          <li>Volvo S60</li>
          <li>Range Rover Sport</li>
        </ul>
      </MDBCol>
      {/* Column 3: Useful Links */}
      <MDBCol md="3" lg="3" xl="3" className='footer-column'>
        <div className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="link" className="me-3" />
          Useful Links
        </div>
        {/* Add your useful links here */}
      </MDBCol>
      {/* Column 4: Contact */}
      <MDBCol md="3" lg="3" xl="3" className='footer-column'>
        <div className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="address-card" className="me-3" />
          Contact
        </div>
        {/* Add your contact info here */}
      </MDBCol>
    </MDBRow>
    
  </MDBContainer>
  
</section>

      {/* Bottom Section */}
      <div className='bottom-section'>
        © {new Date().getFullYear()} GlenSpares. All rights reserved.
      </div>
    </MDBFooter>
  );
};

export default Footer;
