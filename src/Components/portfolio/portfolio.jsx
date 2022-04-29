import PIMG from '../../Assets/projectimg1.png'
import PIMG2 from '../../Assets/protfolioimg2.png'
import './portfolio.css'
const Portfolio = () => {

    return (
        <section id = "portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={PIMG} alt="" />
                    </div>
                    <h3>This is a portfolio item tile</h3>
                    <div className="portfolio__item-CTA">
                        <a href="google.com" className = "btn" target= "_blank">Github</a>
                        <a href="google.com" className = "btn" target= "_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={PIMG} alt="" />
                    </div>
                    <h3>This is a portfolio item tile</h3>
                    <div className="portfolio__item-CTA">
                        <a href="google.com" className = "btn" target= "_blank">Github</a>
                        <a href="google.com" className = "btn" target= "_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={PIMG2} alt="" />
                    </div>
                    <h3>This is a portfolio item tile</h3>
                    <div className="portfolio__item-CTA">
                        <a href="google.com" className = "btn" target= "_blank">Github</a>
                        <a href="google.com" className = "btn" target= "_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section> 
    )
}

export default Portfolio