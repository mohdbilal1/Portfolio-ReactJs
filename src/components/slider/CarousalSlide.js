
import  Slide1  from "../../assets/slide1.jpg";
import  Slide2  from "../../assets/slide3.jpg";
import  Slide3  from "../../assets/slide3.webp";

// import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box } from "@mui/material";
import './carousal.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";



const data = [
    {
        id: 1,
        image: Slide2
    },
    {
        id: 2,
        image: Slide3
    },
    {
        id: 3,
        image: Slide1
    }
];
const CarousalSlide = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
      useEffect(() => {
        AOS.refresh();
      });
    return (
        <Box id="BoxId" data-aos="fade-down"  data-aos-duration="2000">
            <Swiper
                centeredSlides={true}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay,Pagination]}
                className=""
            >
                {data.map(({ id, image }) => {
                    return (
                        <SwiperSlide key={id} className="">
                            <div className="custom-img">
                                <img src={image} alt="img" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Box>
    );
}


export default CarousalSlide;
