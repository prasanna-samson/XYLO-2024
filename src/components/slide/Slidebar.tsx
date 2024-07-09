
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Slidebar.css';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';

export default function Slidebar() {
  return (
    
   
    <Swiper
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    effect="coverflow"
    coverflowEffect={{
      rotate: 60,
      stretch: 1,
      depth: 1000,
      modifier: 12,
      slideShadows: true,
    }}
    modules={[Pagination, Autoplay, EffectCoverflow]}
    className="mySwiper"
  >
         
        <SwiperSlide >
       
          <SlideOne/>

        </SwiperSlide>
        <SwiperSlide >
       
          <SlideTwo></SlideTwo>

        </SwiperSlide>
        <SwiperSlide >
       
          <SlideThree></SlideThree>

        </SwiperSlide>
        <SwiperSlide >
       
          <SlideFour></SlideFour>

        </SwiperSlide>
        
      </Swiper>
  );
}
