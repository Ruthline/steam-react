import React from 'react'

function MoreInfoG(props) {
  return (
        <div className='more-info-galery' key={`#id${props.i1}`}>
            <p>{props.i3}
                <h3>{props.i2}</h3><br></br>
                   </p>
        </div>
  )
}

export default MoreInfoG