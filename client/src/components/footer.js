import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './navbar.css'; // You can include the CSS file if needed

const Footer = () => {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-white'>
      {/* Top Section */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* Logo */}
        <div className='logo'>
          <img src='/assets/icons/Logo.svg' alt='Logo' />
        </div>
        {/* Social Icons */}
        <div className='social-link'>
          <a href='https://www.instagram.com/your-instagram-url' className='text-reset'>
            <img src='/assets/icons/instagram-dark.svg' alt='Instagram' />
          </a>
          <a href='https://www.facebook.com/your-facebook-url' className='text-reset'>
            <img src='/assets/icons/facebook-dark.svg' alt='Facebook' />
          </a>
        </div>
      </section>

      {/* Footer Content */}
      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* Company Info */}
            <MDBCol md="3" lg="3" xl="3" className='footer-column'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                GlenSpares
              </h6>
              {/* Add your company info here */}
            </MDBCol>
            {/* Products */}
            <MDBCol md="3" lg="3" xl="3" className='footer-column'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              {/* Add your product links here */}
            </MDBCol>
            {/* Useful Links */}
            <MDBCol md="3" lg="3" xl="3" className='footer-column'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              {/* Add your useful links here */}
            </MDBCol>
            {/* Contact */}
            <MDBCol md="3" lg="3" xl="3" className='footer-column'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
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

