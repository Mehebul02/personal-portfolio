import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';

import img1 from '../../../assets/images/banner/banner_2.png'
import img2 from '../../../assets/images/banner/ima2.jpg'
import img3 from '../../../assets/images/banner/img3.jpg'
import img4 from '../../../assets/images/banner/img4.jpg'

const ImageSlide = () => {
  return (
    <div>
     <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img   className="   border-[12px] border-white  rounded-tl-3xl rounded-br-3xl" src={img3} alt="" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img   className=" border-[12px] border-white  rounded-tl-3xl rounded-br-3xl" src={img4} alt="" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img   className="b border-[12px] border-white  rounded-tl-3xl rounded-br-3xl" src={img2} alt="" />
           
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default ImageSlide;
