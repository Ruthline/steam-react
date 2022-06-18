import { Link } from 'react-router-dom';
import logotipo from '../components/Header/logotipo.svg'

import '../components/User/user.css'
import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../element/LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/input/Input';
import './LoginS.css'

function LoginS() {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/,
        password: /^.{4,12}$/
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            password.valido === 'true'
        ) {
            cambiarNombre({ campo: '', valido: null });
            cambiarPassword({ campo: '', valido: null });
        } else {
            cambiarFormularioValido(false);
        }
    }
    let button=document.getElementById("ingresar");
let res=document.getElementById('res');

button.onclick=function login(e){
    e.preventDefault()
    let user=document.getElementById("nombre").value;
    let password=document.getElementById("password").value; 

    if(user==="Admin" &&  password==="Kuepa2022"){
    window.location="dashboard.html"
    }else{
        res.textContent="Por favor ingrese correactemente password y Usuario"
        res.style.setProperty("visibility", "visible");
        res.style.textAlign="center";
        res.style.color="#A40101";
        res.style.fontWeight="800";
        res.style.setProperty("opacity", "1");
    }
}

    return (
        <section className="fondo-login">
        <section id="login">
            <div class="images-login">
                <img src={logotipo} alt="Logotipo" className="logo"></img>
            </div>

            <div class="form-login">
                <h2>Login</h2>
                <Formulario action="" onSubmit={onSubmit}>
                    <div className="form-group">
                        <Input
                            estado={nombre}
                            cambiarEstado={cambiarNombre}
                            tipo="text"
                            label="Nombre"
                            placeholder="bpinzon123"
                            name="usuario"
                            leyendaError="El nombre solo puede contener letras y espacios."
                            expresionRegular={expresiones.nombre}
                            
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            estado={password}
                            cambiarEstado={cambiarPassword}
                            tipo="password"
                            label="Contraseña"
                            name="password1"
                            leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                            expresionRegular={expresiones.password}
                           


                        />
                    </div>
                    {formularioValido === false && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
                    </MensajeError>}
                    <ContenedorBotonCentrado>
                        <Link to="/login-STEAM">
                        <Boton type="submit">Entrar</Boton>
                        </Link>
                    </ContenedorBotonCentrado>

                </Formulario>

            </div>
            <div id="res">

        </div>

        </section>
        </section>
    );
}

export default LoginS;