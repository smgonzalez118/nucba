import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
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
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <Link to="/"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Inicio</li></Link>
                <Link to="/galery"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Galería</li></Link>
                <Link to="/about"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Nosotros</li></Link>
                <Link to="/tools"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Herramientas</li></Link>
                <Link to="/contact"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Contacto</li></Link>

                <Link to="/login"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Ingresar</li></Link>

                <Link to="/register"><li onClick={() => {
                    let menu = document.getElementById("menu")
                    menu.style.display = "none"
                    
                    setTimeout( () => {menu.style.display = "block"}, 2000)

                }}>Registrarse</li></Link>


                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header