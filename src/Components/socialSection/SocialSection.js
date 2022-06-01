import '../socialSection/SocialSection.css';
function SocialSection(){
    return(
        <section>
            <div className="social-networking">
                <div className="div-youtube">
                    <h1>Canal de youtube</h1><hr></hr>
                    <h3>@Canalinstitucional</h3>
                    <iframe width="250" height="230" src="https://www.youtube.com/embed/IdVo4oa2eD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </div>
                <div className="div-instagram">
                    
                    <h1>Canal de Instagram</h1><hr></hr>
                    <h3>@Colegiosanpatricio</h3>
                    <iframe src="https://www.instagram.com/p/CZ-JwtvJgTu/embed" width="250" height="230" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                </div>
            </div>
        </section>
    );
}

export default SocialSection;