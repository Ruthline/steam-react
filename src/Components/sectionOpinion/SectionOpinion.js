import Opinion from '../sectionOpinion/useropinion.png';
import '../sectionOpinion/SectionOpinion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
function SectionOpinion(){
    return(
        <section>
            <h1 class="title-opinions">Experiencias Felices</h1>

            <div class="container-opinion">
            <div class="big-opinion">
                    <div class="middle-opinion">
                    <p>" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione et, earum quia tempora provident cumque."</p> 

                    <div class="quotes">
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    
                    </div>
                    
                <div class="small-opinion">
                    
                        <img src={Opinion}></img>
                </div>
                </div>

                <div class="big-opinion">
                    <div class="middle-opinion">
                    <p>" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione et, earum quia tempora provident cumque."</p> 

                    <div class="quotes">
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    
                    </div>
                    
                <div class="small-opinion">
                    
                    <img src={Opinion}></img>
                </div>
                </div>

                <div class="big-opinion">
                    <div class="middle-opinion">
                    <p>" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione et, earum quia tempora provident cumque."</p> 

                    <div class="quotes">
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    
                    </div>
                    
                <div class="small-opinion">
                    
                    <img src={Opinion}></img>
                </div>
                </div>
            </div>

        </section>
    );
}

export default SectionOpinion;