



import { useState} from "react"
import axios from 'axios';
import FooterLogin from "../../../../Components/footerLogin/FooterLogin"
import HeaderLogin from "../../../../Components/headerLogin/HeaderLogin"
import arteimg from './Arte.svg'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Modal from '../../../../Components/modales/Modal'
import { Boton,Contenido } from "../../../../element/LoginForm";
import { useNavigate } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

function CourseArtT() {
    const [estadoModal1, cambiarEstadoModal1]=useState(false);
    const navigate = useNavigate();
    /* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data, setData] = useState({ id: "", trabajo: "", imagen: "", fecha: "", grado: "", descripcion: "", });

    const handleChange = ({ target }) => {
        /*[id:2,nombre:"tatiana",apellido:"cabrera"]
        int num=10;*/
        /*cada vez que exista un cambio se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    /*Peticiones asincronas conectar con bd*/
    const url = "http://localhost:5000/arte";
    /* crear una funcion para procesar el envio de datos del formulario*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);
        //console.log(response)
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El trabajo <strong>
               ${response.data.trabajo}
               </strong>
               ha sido guardado exitosamente!`,
                'success'
            )
            navigate("/coursesTeacher/");
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el trabajo!`,
                'error'
            )
        }
    }
    return (
        <div>

            <HeaderLogin />
            <img src={arteimg} alt="bannerArte" width="100%"></img>
            <h1>Trabajos</h1>
            <button onClick={()=> cambiarEstadoModal1(!estadoModal1)}>Añadir trabajo</button>
            <button>Notas de Materia</button>

            <FooterLogin />
            <div>
                <Modal estado={estadoModal1}
                        cambiarEstado={cambiarEstadoModal1}
                >
                    <Contenido>
                        <Form onSubmit={handleSubmit} className="formWork">
                            <div className="groupForm">
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
                                <label className="trabajo">Imagen</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la url de la imagen"
                                    name="imagen"
                                    value={data.imagen}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="trabajo">Fecha:</label>
                                <input
                                    type="date"
                                    placeholder="Ingrese la fecha"
                                    name="fecha"
                                    value={data.fecha}
                                    onChange={handleChange}

                                >

                                </input>
                            </div>
                            <div>
                                <label>Grado</label>
                                <select type=""
                                    placeholder="Ingrese el Correo"
                                    name="grado"
                                    value={data.grado}
                                    onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2" selected>2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>

                                </select>
                            </div>

                            <div>
                                <label>Descripción:</label>
                                <textarea

                                    placeholder="El siguiente trabajo..."
                                    name="descripcion"
                                    value={data.descripcion}
                                    onChange={handleChange}

                                >

                                </textarea>
                            </div>




                            <Boton>
                                Guardar
                            </Boton>

                        </Form>
                    </Contenido>
                </Modal>
            </div>
        </div>
    )
}
export default CourseArtT