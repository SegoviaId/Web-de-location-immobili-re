import React from 'react';
import '../styles/Banner.css'
import '../styles/about.css'
import banner from '../assets/banner_about.png'
import imgmob from '../assets/banner_about_mob.png'

function Banner () {
    return (
        <div className='banner_container'>
            <img src={banner} alt={'Paysage océanique'} className='banner_img'/>
            <img src={imgmob} alt={'Paysage océanique'} className='banner_img_mob'/>
      
        </div>
    );
};

export default Banner;

