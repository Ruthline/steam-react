import '../sliderSteam/SliderSteam.css';
function SliderSteam(){
    return(
        <div className="slider-index">
        <section id="slider-steam">
          
            <div id="slides-steam">
                <h1>STEAM</h1>
                <div className="inner-steam">
                    <div className="slides_1">
                        <div className="slide-content-steam">
                            <h1>¿Qué es STEAM?</h1>
                        <p>Desde el 2011 hemos trabajado en proyectos de educación enfocados en ciencia , ingeniería, tecnología, arte y matemática.</p>
                        </div> 
                    </div>

                    <div className="slides_2">
                        <div className="slide-content-steam">
                        <h1>¿Qué hacemos?</h1>
                        <p>Se busca recuperar el sentido y significado de la cultura, expresado en la interacción y cuidado.</p>
                        </div>
                    </div>
                    <div className="slides_3">
                        <div className="slide-content-steam">
                        <h1>Transversalidad</h1>
                            <p>Niñas y personas puedan ver las actividades tengan una retroalimentación de lo que hacemos.</p>
                        </div>
                    </div>
                </div>
            </div>

           
        </section>
    </div>
    );
}

export default SliderSteam;