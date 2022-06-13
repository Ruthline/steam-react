import {useState, useEffect} from "react" 
import axios from 'axios';
import { Container, ModalFooter, Row, Modal, Form } from "react-bootstrap";
import ScoreT from "./ScoreT";
import Swal from 'sweetalert2';
function ListScore(){
    const url="http://localhost:5000/estudiantesNotas"

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const[list,setList]=useState([]);

    const[upList,setUplist]=useState([false]);

    const[show,setShow]=useState(false);
    const handleOpen=()=>{setShow(true);}
    const handleClose=()=>{setShow(false);}

    
    const[dataModal, setDataModal]=useState({});
    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]:target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        console.log(response); 
        //console.log(response)
        if(response.status===200){
            Swal.fire(
                'Guardado!',
                `El estudiante <strong>
                ${response.data.nombre}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
               handleClose();
               setUplist(!upList)
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al actualizar el estudiante!`,
                    'error'
            )
        }
    }

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
    
        })
    },[upList])
    console.log(list)
    return(
        <Container>
            <Row>
                {
                    list.map((es,index)=>(
     
                        <ScoreT key={index} estudiantesNotas={es}  setUpList={setUplist} upList={upList} handleClose={handleClose} handleOpen={handleOpen} setDataModal={setDataModal}/>

                    
                    ))
                }
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Editar
                        Personaje
                    </Modal.Title>

                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Ingrese el Nombre del Estudiante"
                        name="nombre"
                        value={dataModal.nombre}
                        onChange={handleChangeModal}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Ingrese la URL de la imagen"
                    name="imagen"
                    value={dataModal.imagen}
                    onChange={handleChangeModal}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
        <Form.Label>Pelicula</Form.Label>
        <Form.Select
        name="pelicula"
        value={dataModal.pelicula}
        onChange={handleChangeModal}>
            <option>Seleccione la pelicula</option>
            <option value="ElViajeDeChihiro">El viaje de Chihiro</option>
            <option value="MiVecinoTotoro">Mi vecino Totoro</option>
            <option value="ElCastilloDelVagabundo">El Castillo de Vagabundo</option>
            <option value="LaPrincesaMononoke">La princesa Mononoke</option>
            <option value="Kiki">Kiki: Entregas a domicilio</option>
            <option value="Ponyo">Ponyo y el secreto de la sirenita</option>
            <option value="ElCastilloCielo">El castillo en el cielo</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Curiosidades</Form.Label>
            <Form.Control 
            type="texttarea"
            placeholder="Ingrese las curiosidades del personaje"
            name="curiosidades"
            value={dataModal.curiosidades}
            onChange={handleChangeModal}
            />
        </Form.Group>
                  
        <Form.Group className="mb-3">
            <Form.Label>Amigos</Form.Label>
            <Form.Control 
            type="texttarea"
            placeholder="Ingrese los amigos "
            name="amigos"
            value={dataModal.amigos}
            onChange={handleChangeModal}
            />
        </Form.Group>
        </Modal.Body>
                <ModalFooter>
                <button className='btn btn-secondary' onClick={handleClose}>Close
                </button>
                <button className='btn btn-primary' type="submit" >Guardar
                </button>
                </ModalFooter>
            </Form>
            </Modal>
            
        </Container>
    )}
export default ListScore