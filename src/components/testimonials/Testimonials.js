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
        id: 2,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR2
    },
    {
        id: 3,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR3
    },
    {
        id: 4,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR4
    },
    {
        id: 5,
        name: "Mohd Bilal",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
        image: AVTR4
    },
    {
        id: 6,
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
                centeredSlides={false}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="container testimonials__container"
                breakpoints={{
                    370: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    786: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {data.map(({ id, name, review, image }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client__avatar">
                                <img src={image} alt="" />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <p className="client__review">{review}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}


export default Testimonials;
