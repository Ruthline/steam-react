
import logotipo from '../../Components/header/logotipo.svg'

import './Login.css'
import React, {useState} from 'react';
import {Formulario,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../element/LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/input/Input';

function Login(){
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
    const [formularioValido,cambiarFormularioValido]= useState(null);
    const expresiones={
        usuario:/^[a-zA-Z0-9_-]{4,16}$/,
        password:/^.{4,12}$/
    }
    const onSubmit = (e) => {
        e.preventDefault();
    if(
    nombre.valido === 'true' &&
    password.valido === 'true' 
    ){
    cambiarNombre({campo: '', valido: null});
    cambiarPassword({campo: '', valido: null});
    } else {
            cambiarFormularioValido(false);
        }
    }


    return(
        <section id="login">
        <div className="images-login">
            <img src={logotipo} alt="Logotipo" className="logo"></img>
        </div>

        <div className="form-login">
            <h2>Login</h2>
            <Formulario action="" onSubmit={onSubmit}>
       
<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
         
          
				/>
 {formularioValido===false && <MensajeError>
        <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
      </MensajeError>}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
		{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
      </ContenedorBotonCentrado>
     
      </Formulario>
    
        </div>
        
    </section>
    );
}

export default Login;