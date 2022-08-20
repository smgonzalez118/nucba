import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [msg, setMsg] = useState(null)
  const [consulta, setConsulta] = useState({})
  const [exito, setExito] = useState(null)
  
  const validar = (e) => {
    e.preventDefault()
    let nuevaConsulta = {
      asunto : e.target.asunto.value,
      mail : e.target.mail.value,
      tel: e.target.tel.value,
      cuerpo: e.target.cuerpo.value
    }

    if (nuevaConsulta.asunto.length > 1 &&
        nuevaConsulta.mail.length > 1 &&
        nuevaConsulta.tel.length > 1 &&
        nuevaConsulta.mail.length > 1 &&
        nuevaConsulta.cuerpo.length > 1      
        ) {
          setConsulta(nuevaConsulta)
          setMsg("RECIBIMOS SU CONSULTA. En breve lo contactaremos")
          setExito(true)
          e.target.asunto.value = ""
          e.target.mail.value = ""
          e.target.tel.value = ""
          e.target.cuerpo.value = ""
          setTimeout(() => {
            setMsg("")
          }, 2000)
        } else {
          setMsg("POR FAVOR, COMPLETAR TODOS LOS CAMPOS")
          setExito(false)
          }
        }
  
  return (
    <section id="contact">
        <h2 className="section-title"> CONTÁCTENOS </h2>
        <form onSubmit={validar}>
            <h3 id="formResponse" className={exito === true ? 'formExito' : 'formError'}> {msg? msg : ""} </h3>
            <input type="text" name="asunto" className="entry" id="asunto" placeholder="Asunto"/>
            <input type="email" name="mail" className="entry"  id="mail" placeholder="Correo electrónico"/>
            <input type="tel" name="tel" className="entry" id="tel" placeholder="Teléfono de contacto"/>
            <textarea name="cuerpo" className="entry" id="cuerpo" cols="30" rows="10"> Escriba aquí su consulta </textarea>
            <input type="submit" value="Enviar" id="envio"/>
        </form>
    </section>
  )
}

export default Contact