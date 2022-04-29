import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderAdd} from 'react-icons/ai'
import SEGNI from '../../Assets/segni2.jpg'
import "./about.css"

const About = () => {
    return (
        <section id = "about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            
            <div className = "container about__container">

                <div className = "about__me">
                    <div className = "about__me-img">
                        <img src = {SEGNI} alt = "my-pic"/> 
                    </div>
                </div>

                <div className = "about__content"> 
                    <div className = "about__cards">
                        <article className = "about__card">
                            <BsFillAwardFill className = "about-icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>
                        <article className = "about__card">
                            <AiFillFolderAdd className = "about-icon"/>
                            <h5>Projects</h5>
                            <small>15+ Completed</small>
                        </article>
                        <article className = "about__card">
                            <FiUsers className = "about-icon"/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                    </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem delectus, ea debitis repellat inventore eaque commodi maiores omnis odit deserunt a minus dignissimos tenetur expedita, harum quas. Recusandae, quis. Ipsum</p>
                <a href = "#contact" className="btn btn-primary">Let's talk</a>
                </div>

            </div>
        </section>

    )
}


export default About