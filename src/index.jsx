import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter }  from 'react-router-dom'
import Router from './Routes/Routes'
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import './styles/index.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <div className='pageContainer'>
      <main>
      <Router/>
      </main>
      </div>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)