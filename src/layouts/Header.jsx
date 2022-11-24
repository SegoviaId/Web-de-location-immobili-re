import './styles/header.css'
import logo from '../assets/logo.png'

function Header() {

    
    return (
        <>
        <div className='header'>
        <a href="/"><img src={logo} alt='kasa' className='header_logo'/></a>
            <nav className='header_nav'>
                <a href="/">Accueil</a>
                <a href="/about">A Propos</a>
            </nav>
        </div>
        </>
    )
}

export default Header;