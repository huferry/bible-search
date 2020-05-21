import React from 'react'
import './Popup.css'

const Popup = (props) => {
    const style = {
        display: props.isVisible ? 'block' : 'none'
    }
    return (
        <div className='popup' style={style}>
            {props.children}
            <div id='back' onClick={props.requestClose}>[ back ]</div>
        </div>
    )
}

export default Popup