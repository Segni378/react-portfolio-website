import {AiFillHome} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import './nav.css'
import {useState} from 'react'

const Nav = () => {
        
        const [active, setactive] = useState("#");

        const handleClick = (prop) => {
            setactive(`#${prop}`);
        }
        return (
        <nav>
            <a href = "#hero" className = {`icon-hover ${active === "#" ? 'active' : ''}`} onClick = {() => handleClick("")}><AiFillHome /></a>
            <a href = "#about" className = {`icon-hover ${active === "#about" ? 'active' : ''}`} onClick = {() => handleClick("about")}><AiOutlineUser /></a>
            <a href = "#experience" className = {`icon-hover ${active === "#experience" ? 'active' : ''}`} onClick = {() => handleClick("experience")}><BiBook /></a>
            <a href = "#services" className = {`icon-hover ${active === "#services" ? 'active' : ''}`} onClick = {() => handleClick("services")}><RiServiceLine /></a>
            <a href = "#contact" className = {`icon-hover ${active === "#contact" ? 'active' : ''}`} onClick = {() => handleClick("contact")}><AiFillMessage /></a>
        </nav>
        )
}

export default Nav