

import { Link } from 'react-router-dom';
import logotipo from '../../Components/header/logotipo.svg'
import { Formik } from 'formik';
import './Login.css'
import Swal from 'sweetalert2';
import { ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../element/LoginForm';
import styled from 'styled-components';

const Login = () => {

    return (

        <Formik
            initialValues={{
                usario: '',
                contraseña: ''
            }}
            validate={(valores) => {
                let errores = {}
                //VALIDACION CORREO Y CONTRASEÑA DEL ADMIN
                if (valores.usario === 'bpinzon123' && valores.contraseña === 'STEAM2022') {
                    Swal.fire({
                        title: 'Credenciales correctas',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Continuar',
                        denyButtonText: `volver`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location="/dashboard"
                        } else if (result.isDenied) {
                            window.location="/estudiantes"
                        }
                    })
                }
                //VALIDACION USUARIO
                if (!valores.usario) {
                    errores.usario = 'Por favor ingrese sus credenciales correctamente';
                } else if (/^[a-zA-Z0-9_-]{4,16}$/.test(valores.usario)) {
                    errores.usario = "El Usuario debe contener solo numeros y letras."

                    //VALIDACION CONTRASEÑA
                } if (!valores.contraseña) {
                    errores.contraseña = 'Por favor ingrese su contraseña'
                } else if (!/^.{4,12}$/.test(valores.contraseña)) {
                    errores.contraseña = 'La contraseña tiene que ser de 4 a 12 dígitos.'

                }
                return errores;
            }}

            onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log('Entrar')
            }}>


            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                <div>
                    <form action='/dashboard' onSubmit={handleSubmit} id="login">
                        <div class="images-login">
                            <img src={logotipo} alt="Logotipo" className="logo"></img>
                        </div>
                        <div class="form-login">
                            <h2>Login</h2>

                            <div className="form-group">
                                <label htmlFor='usario' className="form-label">Usuario</label>
                                <input
                                    className="form-input"
                                    type='text'
                                    id='usario'
                                    name='usario'
                                    placeholder='bpinzon123'
                                    value={values.usario}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />

                                {touched.usario && errors.usario && <div className='error'>{errors.usario}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                <input
                                    className="form-input"
                                    type='text'
                                    id='contraseña'
                                    name='contraseña'
                                    placeholder='Ingrese su contraseña'
                                    value={values.contraseña}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
                            </div>

                            <ContenedorBotonCentrado>
                                <Boton type="submit">Entrar</Boton>
                            </ContenedorBotonCentrado>

                        </div>


                    </form>
                </div>
            )}

        </Formik>

    );
}

export default Login;