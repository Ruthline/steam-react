import '../sectionOpinion/SectionOpinion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
function SectionOpinion(props){
    return(
        <section>
            

            <div class="container-opinion">
                <div class="big-opinion" key={`#id${props.p1}`}>
                        <div class="middle-opinion">
                            <p>{props.p3}</p> 

                            <div class="quotes">
                                <FontAwesomeIcon icon={faQuoteLeft}/>
                            </div>
                        
                        </div>
                        
                    <div class="small-opinion">
                        
                            <img src={props.p2}></img>
                    </div>
                </div>
               
            </div>

        </section>
    );
}

export default SectionOpinion;