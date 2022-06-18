import '../socialSection/SocialSection.css';
function SocialSection(){
    return(
        <section>
            <div className="social-networking">
                <div className="div-youtube">
                    <div className='title-social'>
                        <h1>Canal de youtube</h1>
                        <p>@Canalinstitucional</p>
                    </div>
                    <iframe width="250" height="230" src="https://www.youtube.com/embed/IdVo4oa2eD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </div>
                <div className="div-instagram">
                    
                <div className='title-social'>
                        <h1>Instagram</h1>
                        <p>@Colegiosanpatricio</p>
                    </div>
                    <iframe src="https://www.instagram.com/p/CZ-JwtvJgTu/embed" width="250" height="230" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                </div>
            </div>
        </section>
    );
}

export default SocialSection;