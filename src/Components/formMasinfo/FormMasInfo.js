import '../formMasinfo/FormMasInfo.css'
function FormMasInfo(){
    return(
        <div>
             <main class="container-mas-info">
        
        <div class="second-section-mas-info">
            <h1>¡Nos alegra que quieras recibir información!</h1>
            <div class="form-mas-info">
                <div class="purple-square">
                    <p>Me gustaría recibir más información sobre proyectos de:</p>
                    <div class="group-list">
                        <div class="list-one">
                            <div>
                                <label for="type-projects">Ciencia</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div>
                                <label for="type-projects">Tecnologia</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div>
                                <label for="type-projects">Ingeniería</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                                </div> 
                            </div>
                        
                        <div class="list-two">
                            <div>
                                <label for="type-projects">Arte</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div>
                                <label for="type-projects">Matemáticas</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                            </div>
                            <div>
                                <label for="type-projects">Todos</label>
                                <input type="radio" name="projects" id="type-projects"></input>
                                </div> 
                            </div>
                    </div>
                    
                    
                </div>
                <div class="white-square">
                    <label for="e-mail">Correo:</label>
                    <input type="email" id="e-mail" name="e-mail" placeholder="aquivauncorreo@hotmail.com"></input>
                    <div class="terminos">
                        <label for="check-conditions">Aceptar términos y condiciones</label>
                        <input type="checkbox" id="check-conditions" name="check-conditions"></input>
                    </div>
                    
                </div>
               
            </div>
            <button class="btn-send">Enviar</button>
        </div>

    </main>
        </div>
    );
}

export default FormMasInfo;