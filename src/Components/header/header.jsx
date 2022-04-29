import React from 'react'
import CTA from './CTA'
import myImg from "../../Assets/segni.jpg";
import HeaderSocials from './headerSocials'
import "./header.css"


const Header = () => {

    return (
        <header id = "hero">
            <div className="container header__container">
                <div>
                    <h5>Hello, I'm </h5>
                    <h1>Segni Guta </h1>
                    <h5>Fullstack Developer </h5>
                    <CTA />

                    <HeaderSocials />
                    <div className = "my-image">
                        <img src = {myImg} alt = "Segni" />
                    </div>

                    <a href = "#contact" className="scroll__down">Scroll down</a>
                </div>
            </div>
        </header>
    )

}

export default Header;