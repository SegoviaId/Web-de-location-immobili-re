import React from 'react';
import logo from '../assets/logo_footer.png'
import copyright from '../assets/copyright.png'
import './styles/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt="kasa" className='logo_footer' />
            <img src={copyright} alt="kasa copyright" className='copyright_footer' />
        </div>
    );
};

export default Footer;
