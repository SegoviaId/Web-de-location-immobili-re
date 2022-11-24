import React from 'react';
import '../styles/Banner.css'
import '../styles/about.css'

const Banner = ({text, src, srcm, alt,}) => {
    return (
        <div className='banner_container'>
            <span className='banner_text'>{text}</span>
            <img src={src} alt={alt} className='banner_img'/>
            <img src={srcm}  alt={alt}  className='banner_img_mob'/>
           
            
        </div>
    );
};

export default Banner;



