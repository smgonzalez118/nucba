import React from 'react'
import { useRef } from 'react'


const Login = () => {
  const msg = useRef()
  
  const validar = (e) => {
    e.preventDefault()
    let user = e.target.user.value
    let pass = e.target.pass.value

    if (user.length > 1 && pass.length > 1) {
      setTimeout(() => {
        msg.current.innerText = 'Verificando la base de datos'
      }, 300)
      setTimeout(() => {
        msg.current.innerText = 'Verificando la base de datos [%'
      }, 600)
      setTimeout(() => {
        msg.current.innerText = 'Verificando la base de datos [%%'
      }, 900)
      setTimeout(() => {
        msg.current.innerText = 'Verificando la base de datos [%%%]'
      }, 1200)    
      setTimeout(() => {
        msg.current.innerText = ""
      }, 1500)
      
    }
  }
  
  
  return (
    <section className="login" id="login">
        <form className="login__form" onSubmit={validar}>
            <h2> Ingreso de clientes </h2>
            <span ref={msg}></span>
            <input type="text" name="user" id="user" placeholder="USUARIO"/>
            <input type="text" name="pass" id="pass" placeholder="CONTRASEÑA"/>
            <input type="submit" value="INGRESAR" id="login__form-button"/>
        </form>
    </section>
  )
}

export default Login