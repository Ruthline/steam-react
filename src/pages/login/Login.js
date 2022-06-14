import { Link } from 'react-router-dom';
import logotipo from '../../Components/header/logotipo.svg'

import './Login.css'
import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeError, MensajeExito } from '../../element/LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/inputs/Inputs';

function Login() {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null});
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const expresiones = {
        nombre: /^[a-zA-Z0-9_-]{4,16}$/,
        password: /^.{4,12}$/
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            password.valido === 'true'
           
        ) {
            cambiarFormularioValido(true)
            cambiarNombre({ campo: '', valido: "bpinzon123"});
            cambiarPassword({ campo: '', valido: "STEAM2022" });
        } else {
            cambiarFormularioValido(false);
            cambiarNombre({ campo: '', valido: null});
            cambiarPassword({ campo: '', valido: null });
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
                            for="control" 
                            estado={nombre}
                            cambiarEstado={cambiarNombre}
                            tipo="text"
                            label="Nombre"
                            placeholder="bpinzon123"
                            name="usuario"
                            leyendaError="El usuario solo puede contener letras y espacios."
                            expresionRegular={expresiones.nombre}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            id="password" 
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
                            <b>Error:</b>Por favor diligenciar las credeciales correctamente</p>
                    </MensajeError>}
                    <ContenedorBotonCentrado>
                       
                    <Boton type="submit">Enviar</Boton>
					{formularioValido === true && <Link to="/dashboard"></Link> }
                    </ContenedorBotonCentrado>

                </Formulario>

            </div>
            <div id="res">

        </div>

        </section>
        </section>
    );
}

export default Login;