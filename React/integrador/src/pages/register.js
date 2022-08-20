import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Register = () => {
  
  const [msg, setMsg] = useState(null)
  const [user, setUser] = useState({})
  const [exito, setExito] = useState(null)
  const formResponse = useRef()
  const validar = (e) => {
      e.preventDefault()
      let nuevoUsuario = {
        name : e.target.name.value,
        lastname : e.target.lastname.value,
        dni : e.target.dni.value,
        mail : e.target.mail.value,
        user: e.target.user.value,
        pass: e.target.pass.value
      }

      console.log(nuevoUsuario)


      if (nuevoUsuario.name.length > 1 &&
          nuevoUsuario.lastname.length > 1 &&
          nuevoUsuario.dni.length > 1 &&
          nuevoUsuario.mail.length > 1 &&
          nuevoUsuario.user.length > 1 &&
          nuevoUsuario.pass.length > 1        
          ) {
            setUser(nuevoUsuario)
            setMsg("REGISTRO EXITOSO")
            setExito(true)
            e.target.name.value = ""
            e.target.lastname.value = ""
            e.target.dni.value = ""
            e.target.mail.value = ""
            e.target.user.value = ""
            e.target.pass.value = ""
            setTimeout(() => {
              setMsg("")
            }, 2000)
          } else {
            setMsg("DATOS INCOMPLETOS")
            setExito(false)
            }
          }

  return (
    <section className="login" id="login">
        <form className="login__form" onSubmit={validar}>
            <h2> Registro de clientes </h2>
            <h3 id="formResponse" className={exito === true ? 'formExito' : 'formError'}> {msg? msg : ""} </h3>
            <input type="text" className="entrada" name="name" id="name" placeholder="NOMBRES"/>
            <input type="text" className="entrada"  name="lastname" id="lastname" placeholder="APELLIDO"/>
            <input type="number" className="entrada"  name="dni" id="dni" placeholder="DNI"/>
            <input type="email" className="entrada"  name="mail" id="mail" placeholder="MAIL"/>
            <input type="text" className="entrada"  name="user" id="user" placeholder="USUARIO"/>
            <input type="password" name="pass" id="pass" placeholder="CONTRASEÑA"/>
            <input type="submit" value="REGISTRARSE" id="login__form-button"/>
        </form>
    </section>
  )
}

export default Register