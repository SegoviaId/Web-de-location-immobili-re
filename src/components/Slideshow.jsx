import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rents from '../api/logements.json'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/slideshow.css'


const Slideshow = () => {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const params = useParams()
    const rent = rents.find(r => r.id === params.id)

    useEffect(() => {
        if (carouselIndex > rent.pictures.length - 1) {
            setCarouselIndex(0)
        }
        if (carouselIndex < 0) {
            setCarouselIndex(rent.pictures.length - 1)
        }
    }, [carouselIndex, rent.pictures.length])
    return (
        <div className='carousel'>
                {rent.pictures.length > 1 && <button onClick={() => 
                    setCarouselIndex(carouselIndex - 1)} className='carousel_btn left' aria-label='boutton de défilement'>
                        <FontAwesomeIcon icon={faChevronLeft}/></button>}
                    
                    <img src={rent.pictures[carouselIndex]} alt="Galerie montrant les différentes pièces du logement" className='carousel_img'/>
                    
                    {rent.pictures.length > 1 && <span className='carousel_bullet_point'>{carouselIndex + 1 }/{rent.pictures.length}</span>}

                {rent.pictures.length > 1 && <button onClick={() => 
                    setCarouselIndex(carouselIndex + 1)} className='carousel_btn right' aria-label='boutton de défilement'>
                        <FontAwesomeIcon icon={faChevronRight} /></button>}
        </div>
    );
};

export default Slideshow;