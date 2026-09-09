// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const Hero1 = new URL('../img/banner_Hero1.jpg', import.meta.url).href
const Hero2 = new URL('../img/banner_Hero2.jpg', import.meta.url).href
const Hero3 = new URL('../img/banner_Hero3.jpg', import.meta.url).href

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay ,Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            rewind={true}
            pagination={{ dynamicBullets: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h3>Introducing the new</h3>
                <h4>
                  Microsoft Xbox <br /> 360 Controller
                </h4>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={Hero1} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h3>Introducing the new</h3>
                <h4>
                  Premium Bluetooth <br /> Wireless Speaker
                </h4>
                <p>Powerful Sound. Anywhere. Anytime.</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={Hero2} alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h3>Introducing the new</h3>
                <h4>
                  Wireless Bluetooth <br /> Earbuds
                </h4>
                <p>Pure Sound. Seamless Connection.</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={Hero3} alt="hero" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
