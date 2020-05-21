import React from 'react'

const Scroll = (props) => {
    return(
        <div id={props.id} style={{ 'overflowX': 'hidden', 'overflowY': 'scroll'}}>
            {props.children}
        </div>
    )

}

export default Scroll