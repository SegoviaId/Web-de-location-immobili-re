import React from 'react';
import '../styles/Banner.css'
import '../styles/about.css'
import banner from '../assets/banner_home.png'
import imgmob from '../assets/banner_home_mob.png'

function Banner ()  {
    return (
        <div className='banner_container'>
            <h1 className='banner_text'>Chez vous, partout et ailleurs</h1>
            <img src={banner} alt={'Paysage forestière'} className='banner_img'/>
            <img src={imgmob}  alt={'Paysage forestière'}   className='banner_img_mob'/>   
        </div>
    );
};

export default Banner;



