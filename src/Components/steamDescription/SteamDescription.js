import '../steamDescription/SteamDescription.css'



function SteamDescription(props){
    
    return(

        
            
            <div className='desktop-version'>
                <div className='tablet-version'>
                    <div className='square-description'  key={props.sbd1}>
                        <h1>{props.sdb2}</h1><hr></hr>
                        <div className='photo-text'>
                            <img src={props.sdb3} alt={props.sdb2}></img>
                            <p>{props.sdb4}</p>
                        </div>
                    </div>

                
                </div>
           
            </div>
    );
}
export default SteamDescription;