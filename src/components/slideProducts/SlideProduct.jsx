import Products from "./Products";
import "./slideProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay ,Navigation } from "swiper/modules";

const SlideProduct = ({title , dec , data}) => {
    return (
        <div className="slide-product slide">
        <div className="container">
            <div className="top-slide">
            <h2>{title}</h2>
            <p>{dec}</p>
            </div>
            <Swiper
            rewind={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={4}
            navigation={true}
            modules={[Autoplay ,Navigation]}
            className="mySwiper"
            >

                {data.map((item)=>{
                    return(
                        <SwiperSlide><Products item = {item} /></SwiperSlide>

                    )
                })}

            </Swiper>
        </div>
        </div>
    );
};

export default SlideProduct;
