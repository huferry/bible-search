import React from 'react'
import './Background.css'

const Background = () => {
    return (
        <video autoPlay muted loop id="bg">
            <source src="/background.mp4" type="video/mp4"></source>
        </video>
    )
}

export default Background