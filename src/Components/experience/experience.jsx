import {BsPatchCheckFill} from 'react-icons/bs';
import "./experience.css"
const Experience = () => {
    return (
        <section id = "experience">
            <h5>Get to know</h5>
            <h2>My Skills</h2>
            <div className = "container experience__container">
                <div className = "skills frontend__skills">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                      
                        <article className = "experience__detail d1">
                            <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small  className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                             <BsPatchCheckFill className = "experience_detail-icon" />
                             <div>
                                <h4>CSS</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>Vanilla JavaScript</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>ReactJs</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className = "skills backend__skills">
                     <h3>Backend Development</h3>
                     <div className="experience__content">
                      
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>NodeJs</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                            <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>ExpressJs</h4>
                                <small className = "text-light">Experienced</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className = "text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className = "experience__detail">
                              <BsPatchCheckFill className = "experience_detail-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className = "text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Experience