import {BsTelegram} from 'react-icons/bs';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const HeaderSocials = () => {

    return (
        <div className = "header__socials">
            <a href="https://www.instagram.com/segni_12/" rel = "noreferrer" target="_blank"><AiFillLinkedin className="icon-hover" /></a>
            <a href="https://github.com" rel = "noreferrer" target="_blank"><AiFillGithub className="icon-hover"/></a>
            <a href="https://t.me/KingdomofPower" rel = "noreferrer" target="_blank"><BsTelegram className="icon-hover"/></a>
            <a href="https://wa.me/9537346793" rel = "noreferrer" target="_blank"><AiOutlineWhatsApp className="icon-hover"/></a>
        </div>
    )
}

export default HeaderSocials;