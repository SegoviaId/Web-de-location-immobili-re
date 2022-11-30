import React, { useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import { useNavigate, useParams } from 'react-router-dom';
import rents from '../api/logements.json';
import Equipments from '../components/Equipements';
import '../styles/rentDescription.css';
import Tags from '../components/Tags';
import StarRating from '../components/StarRating';

const RentDescription = () => {
    const navigate = useNavigate()
    const params = useParams()
    const rent = rents.find(r => r.id === params.id)
    
    useEffect(() => {
        if (!rent) {
            navigate('/error')
        }
    }, [rent, navigate])

    return (
        <div className='page'>
           {rent && 
            <>
            <Slideshow /> 
              <div className="section_box">
                 <div className='section_title_info'>
                            <h1 className='rent_title'>{rent.title}</h1>
                            <h3 className='rent_loc'>{rent.location}</h3>
                        <Tags tags={rent.tags}/>
                 </div>
                 <div className='section_host_info'>
                    <div className='text_host'>
                        <p className='name_host'>{rent.host.name}</p>
                        <img src={rent.host.picture} alt="Identité du propriétaire" className="img_host" />
                    </div>
                    <StarRating value={parseInt(rent.rating)}/>
                 </div>
                 <div className='section_collapse'>
                     <Equipments/>
                 </div>
              </div>
            </>
           }
       </div>
)};
export default RentDescription;