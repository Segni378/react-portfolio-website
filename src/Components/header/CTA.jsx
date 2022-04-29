import React from 'react'
import CV from '../../Assets/Segni_Guta_CV.pdf'
const CTA = () => {
    
    return (
        <div className = "cta">
            <a href={CV} download className = "btn">Download CV</a>
            <a href="#contact" download className = "btn btn-primary">Let's talk</a>
        </div>

    )
}

export default CTA