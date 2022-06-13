import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import '../modales/modal.css'

function FormScore(){
/*una ruta useHistory useNavigate constante para que retorne al listar*/
const navigate=useNavigate();


/* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data,setData]=useState({id:"",fecha:"",trabajos:"",materia:"", nota:""});

     const handleChange=({target})=>{
/*[id:2,nombre:"tatiana",apellido:"cabrera"]
int num=10;*/
/*cada vez que exista un cambio se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    /*Peticiones asincronas conectar con bd*/
    const url="http://localhost:5000/trabajos";
    /* crear una funcion para procesar el envio de datos del formulario*/
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        //console.log(response)
        if(response.status===201){
            Swal.fire(
                'Guardado!',
                `El trabajo <strong>
                ${response.data.trabajo}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
                navigate("/");
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el trabajo!`,
                    'error'
            )
        }
    }

return(
 

    <Form onSubmit={handleSubmit} >
                <div>
                    <label className="trabajo">Trabajo</label>
                        <input
                        type="text"
                        placeholder="Ingrese el trabajo"
                        name="trabajo"
                        value={data.trabajo}
                        onChange={handleChange}
                        />
                </div>
                <div>
               <label>Materia</label>
               <select name="select"  type=""
                        placeholder="Ingrese el Correo"
                        name="materia"
                        value={data.materia}
                        onChange={handleChange}>
                    <option value="Matematicas">Matematicas</option>
                    <option value="Ciencia" selected>Ciencia</option>
                    <option value="Ingenieria">Ingenieria</option>
                    <option value="Arte">Arte</option>
                    <option value="Tencologia">Tecnologia</option>
                </select>
                </div>
                <div>
                    <label>Fecha:</label>
                    <input
                    type="date"
                    placeholder="Ingrese la fecha"
                    name="fecha"
                    value={data.fecha}
                    onChange={handleChange}
                    
                    >
                    
                    </input>
                </div>
                        
               
                
        
    <button className="btn-verde center">
        Guardar
    </button>

    </Form>
    

)
}
export default FormScore