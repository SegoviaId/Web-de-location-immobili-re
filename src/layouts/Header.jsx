import './styles/header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
        <div className='header'>
        <Link to="/"><img src={logo} alt='kasa' className='header_logo'/></Link>
            <nav className='header_nav'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
        </>
    )
}

export default Header;