import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse'
import rents from '../api/logements.json';
import '../styles/rentDescription.css';


function Equipments() {
const {id} = useParams()
const rent = rents.find((location) => location.id === id)

 return (
         <>  
           <Collapse   title='Description'
                   content={rent.description}
           />
           <Collapse  title='Équipements' 
              content={rent.equipments.map((equipment, index) => (
               <p key={index} className='listItem'>
                   {equipment}
              </p>
             ))}
           />        
        </> 
    )
} 
export default Equipments;                