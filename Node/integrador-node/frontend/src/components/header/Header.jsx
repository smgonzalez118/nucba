import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
    const closeMenu = () => {
        let menu = document.getElementById("check")
        menu.checked = false
    }
  
    return (
    <header>
        <nav id="menuprincipal">
            <div className="logo">
                <Link to="/"> <img src="images/logo3.png" alt="Logo de Blue Quantum Capital"/></Link>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/galery">Galería</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    <li><Link to="/tools">Herramientas</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </div>
            <ul className="login-box">
                <li> <Link to="/login"> Ingresar </Link></li>
                <li> <Link to="/register"> Registrarse </Link></li>
            </ul>
        </nav>

        <nav role="navigation">
            <div id="menuToggle">
                <input id="check" type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <Link to="/"><li onClick={closeMenu}>Inicio</li></Link>
                <Link to="/galery"><li onClick={closeMenu}>Galería</li></Link>
                <Link to="/about"><li onClick={closeMenu}>Nosotros</li></Link>
                <Link to="/tools"><li onClick={closeMenu}>Herramientas</li></Link>
                <Link to="/contact"><li onClick={closeMenu}>Contacto</li></Link>
                <Link to="/login"><li onClick={closeMenu}>Ingresar</li></Link>
                <Link to="/register"><li onClick={closeMenu}>Registrarse</li></Link>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header