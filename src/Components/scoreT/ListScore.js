import {useState, useEffect} from "react" 
import axios from 'axios';
import { Container, ModalFooter, Row, Modal, Form } from "react-bootstrap";
import ScoreT from "./ScoreT";
import Swal from 'sweetalert2';
function ListScore(){
    const url="http://localhost:5000/trabajos"

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
                        name="estudiante"
                        value={dataModal.estudiante}
                        onChange={handleChangeModal}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Ingrese el correo"
                    name="correo"
                    value={dataModal.correo}
                    onChange={handleChangeModal}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
        <Form.Label>Trabajos</Form.Label>
        <Form.Select
        name="pelicula"
        value={dataModal.trabajos}
        onChange={handleChangeModal}>
            <option>Seleccione la materia</option>
            <option value="Matematicas">Matematicas</option>
            <option value="Ciencia">Ciencia</option>
            <option value="Arte">Arte</option>
            <option value="Tecnologia">tecnologia</option>
            <option value="Inegenieria">Ingenieria</option>
           
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Notas</Form.Label>
            <Form.Control 
            type="number"
            min="1" max="10"
            placeholder="Ingrese la nota del (1-10)"
            name="notas"
            value={dataModal.notas}
            onChange={handleChangeModal}
            />
        </Form.Group>
                  
        <Form.Group className="mb-3">
            <Form.Label>Promedio</Form.Label>
            <Form.Control 
           type="text"
            placeholder="Ingrese el promedio "
            name="promedio"
            value={dataModal.promedio}
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