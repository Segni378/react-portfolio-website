import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <a href="#" className = "footer__logo"><span>SEG</span><span className="stylize__logo">N</span><span className = "SC">ISC</span></a>

            <ul className = "permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="#"><BsInstagram /></a>
                <a href="#"><BsWhatsapp /></a>
                <a href="#"><BsTelegram /></a>
            </div>

            <div className="copy__right">
                <small>&copy; SEGNISC. All rights reserved.</small>
            </div>
        </footer>

    )
}


export default Footer