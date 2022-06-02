import '../formMasinfo/FormMasInfo.css'
function FormMasInfo(){
    return(
        <div>
             <main className="container-mas-info">
        
        <div className="second-section-mas-info">
            <h1>¡Nos alegra que quieras recibir información!</h1>
            <div className="form-mas-info">
                <div className="purple-square">
                    <p>Me gustaría recibir más información sobre proyectos de:</p>
                    <div className="group-list">
                        <div className="list-one">
                            <div className='separate'>
                                <label for="type-projects">Ciencia</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div className='separate'>
                                <label for="type-projects">Tecnologia</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div className='separate'>
                                <label for="type-projects">Ingeniería</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                                </div> 
                            </div>
                        
                        <div class="list-two">
                            <div className='separate'>
                                <label for="type-projects">Arte</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div className='separate'>
                                <label for="type-projects">Matemáticas</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div className='separate'>
                                <label for="type-projects">Todos</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                                </div> 
                            </div>
                    </div>
                    
                    
                </div>
                <div className="white-square">
                    <label for="e-mail">Correo:</label>
                    <input type="email" id="e-mail" name="e-mail" placeholder="aquivauncorreo@hotmail.com"></input>
                    <div className="terminos">
                        <label for="check-conditions">Aceptar términos y condiciones</label>
                        <input type="checkbox" id="check-conditions" name="check-conditions"></input>
                    </div>
                    
                </div>
               
            </div>
            <button className="btn-send">Enviar</button>
        </div>

    </main>
        </div>
    );
}

export default FormMasInfo;