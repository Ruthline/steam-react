import React from 'react';
import { Link } from 'react-router-dom';

function ContainSHome(props) {
  return (
    <div className="slide_1" key={`#id${props.s1}`}>
    <div className="slide-content">
        <img src={props.s2} alt={props.s1}></img>
        <p>{props.s3}</p>
        <Link to="/steam"><button className="read-more">leer más</button></Link>
    </div> 
</div>
  )
}

export default ContainSHome