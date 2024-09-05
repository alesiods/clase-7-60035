import React from 'react'
import { useState } from 'react'
import emailjs from "@emailjs/browser"

const Form = () => {
    const [nombre, setNombre] =useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")

    //funcion auxiliar

    const enviarMensaje =(event) => {
        event.preventDefault()

        const templateParams ={
            from_name: nombre,
            from_email: email,
            message: mensaje
        }

        emailjs.send(
            //id sel servicio
            //id de la template
            //objeto con los datos del formulario
            //id del usuario(key publica)
            "service_p1kiutq",
            "template_sauo3aj",
            templateParams,
            "ySnokeMB58glQYAY_"
        )
        .then(()=> console.log("Mensaje Enviado"))
        .catch(error => console.log(error))

        setNombre("")
        setMensaje("")
        setEmail("")
    }

    
  return (
    <form onSubmit={enviarMensaje}>
        <label htmlFor="">Nombre</label>
        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Mensaje</label>
        <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={(e)=>setMensaje(e.target.value)}></textarea>

        <button type='submit'>Enviar Mensaje</button>


    </form>
  )
}

export default Form