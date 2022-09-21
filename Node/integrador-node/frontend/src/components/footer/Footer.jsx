import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer>
        <div className="footer__desc"> 2022. © Todos los derechos reservados.

        </div>
        <ul className="footer__menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/galery">Galería</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/tools">Herramientas</Link></li>
        </ul>
    </footer>
  )
}

export default Footer
