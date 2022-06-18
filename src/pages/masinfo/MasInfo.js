import React, {useState} from 'react';
import {Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/formprueba/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/input/Input';
import './style.css'
import Header from '../../Components/header/Header';
import BannerMasInfo from '../../Components/bannerMasinfo/BannerMasInfo';
import Footer from '../../Components/footer/Footer';
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';



const MasInfo =()=>{
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}


const history=useNavigate();    
const [data,setData]=useState({id:"",nombre:"" ,correo:"",telefono:""}); 

const handleChange=({target})=>{
	setData({
        ...data,
        [target.name]:target.value
    })
}

const url="http://localhost:2000/notificaciones"; 

const handleSubmit=async(e)=>{
	e.preventDefault();
	const response=await axios.post(url,data);//await espera hasta que se ejcute la petición
	//console.log(response);
	if (response.status === 201) {
		
		Swal.fire(
			'Proximamente!',
			`Gracias <strong> ${response.data.nombre} ${response.data.correo}</strong> recibiras muy pronto las notificaciones`,
			'success'
		)
		history.push('/');
		
	}else {
		Swal.fire(
			'Error!',
			'Hubo un problema al registrarse',
			'error'
		)
	}


	if(
		nombre.valido === 'true' &&
		correo.valido === 'true' &&
		telefono.valido === 'true' &&
		terminos
	){
		cambiarFormularioValido(true);
		cambiarNombre({campo: '', valido: null});
		cambiarCorreo({campo: '', valido: null});
		cambiarTelefono({campo: '', valido: null});

		// ... 
	} else {
		cambiarFormularioValido(false);
	}
}


  return ( 
    <main>
        <Header/>
        <BannerMasInfo/>
        <div>
			
            <Formulario action="" onSubmit={handleSubmit}>
			<h1 className='t-form'>¡Nos alegra que quieras recibir información!</h1>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					type="text"
					label="Nombre"
					placeholder="Pepito"
					name="nombre"
					value={data.nombre}
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
					onChange={handleChange}
				/>
				
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					type="email"
					label="Correo Electrónico"
					placeholder="pepito@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					value={data.correo}
					onChange={handleChange}
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					value={data.telefono}
					onChange={handleChange}
					tipo="text"
					label="Teléfono"
					placeholder="1234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>


           

      <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
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

      <Footer/>
    </main>
    
    );
}



export default MasInfo;