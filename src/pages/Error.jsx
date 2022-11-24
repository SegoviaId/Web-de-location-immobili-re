import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.css'


const Error = () => {
    return (
        <>
        <div className='err_container'>
            <h1 className='err_title'>404</h1>
            <h2 className='err_oups'>Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='err_link'>Retournez sur la page d'accueil</Link>
        </div>
        </>
    );
};

export default Error;