import React, { useState } from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/Collapse.css'


const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='container'>
            <button className='collapse toggle' onClick={() => setIsOpen(!isOpen)}>{props.label}
            <FontAwesomeIcon icon={faChevronDown} className={isOpen ? "icon up" : "icon"}/></button> 
            {isOpen && <div className='content'>{props.children}</div>}
        </div>
    );
};

export default Collapse;