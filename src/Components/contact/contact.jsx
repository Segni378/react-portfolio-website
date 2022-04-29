import {MdOutlineMailOutline} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'

const Contact = () => {
    return (
        <section id = "contact">
            <h2>Get In Touch</h2>
            <h5>Contact Me</h5>

            <div className="container contactus__container">
                <div className="social__medias-contact">
                    <div className="social__media-contact">
                        <MdOutlineMailOutline />
                        <h3>Email</h3>
                        <h5>segniworku@gmail.com</h5>
                        <a href="mailto:segniworku@gmail.com">Send a message</a>
                    </div>
                    <div className="social__media-contact">
                        <BsMessenger />
                        <h5>segnidev</h5>
                        <a href="">Send a message</a>
                    </div>
                    <div className="social__media-contact">
                        <BsWhatsapp />
                        <h5>+91212222222</h5>
                        <a href="">Send a message</a>
                    </div>
                </div>
                <div className="entry__fields">
                    <form action="">
                        <input type="text" name = "name" placeholder="Your full name"/>
                        <input type="text" name = "email" placeholder="Your email"/>
                        <textarea type="text" rows="10" name="message" placeholder="Your message" />
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                </div>
            </div>
        </section>

    )
}


export default Contact