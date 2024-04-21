import "./testimonials.css";
import AVTR1 from "../../assets/b8.jpg";
import AVTR2 from "../../assets/b12.jpg";
import AVTR3 from "../../assets/b6.jpg";
import AVTR4 from "../../assets/b4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR1
    },
    {
        id: 1,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR2
    },
    {
        id: 1,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR3
    },
    {
        id: 1,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR4
    }
];
const Testimonials = () => {
    return (
        <section id="testimonials" data-aos="zoom-in" data-aos-duration="2000">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                centeredSlides={true}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="container testimonials__container"
            >
                {data.map(({ id, name, review, image }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client__avatar">
                                <img src={image} alt="" />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                                est autem exercitationem libero culpa ipsam fugit praesentium,
                                aliquid quas sint harum cumque similique sapiente commodi
                                magni facere ut illo! Laboriosam!
                            </small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}


export default Testimonials;
