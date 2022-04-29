import "./testimonials.css"
import IMG1 from '../../Assets/img1.jpg'
import IMG2 from '../../Assets/img2.jpg'
import IMG3 from '../../Assets/img3.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    return (

        <section id = "testimonials">

            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper  modules={[Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        scrollbar={{ draggable: true }}

                        
                        className="container testimonial__container">
                <SwiperSlide className = "testimonial">
                    <div className="client__avatar">
                        <img src={IMG1} alt="" />
                    </div>

                    <h5>Abdi Guta</h5>
                    <small className = "client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum possimus saepe illo assumenda, perspiciatis repellat.
                    </small>
                </SwiperSlide>
                <SwiperSlide className = "testimonial">
                    <div className="client__avatar">
                        <img src={IMG2} alt="" />
                    </div>

                    <h5>Jude John</h5>
                    <small className = "client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum possimus saepe illo assumenda, perspiciatis repellat.
                    </small>
                </SwiperSlide>
                <SwiperSlide className = "testimonial">
                    <div className="client__avatar">
                        <img src={IMG3} alt="" />
                    </div>

                    <h5>Jame Brown</h5>
                    <small className = "client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum possimus saepe illo assumenda, perspiciatis repellat.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>


    )
}


export default Testimonials