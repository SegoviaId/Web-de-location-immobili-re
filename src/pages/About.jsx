import React from 'react';
import Collapse from '../components/Collapse'
import Banner from '../components/Banner_about'
import about from '../api/about.json'
import '../styles/about.css'

function About () {
   return (
       <> 
          <div className="banner_about">
              <Banner />  
          </div>
          <div className='box'>
                 {about.map((data, index) => (        
              <Collapse className='Description'  
                  key={index} 
                  title={data.title} 
                  content={data.content} 
              />
                ))}
          </div>
       </>
    )
}

export default About;