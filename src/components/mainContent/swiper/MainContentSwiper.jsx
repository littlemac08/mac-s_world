import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperContent from '../swiperContent/SwiperContent';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft  } from "react-icons/md";
import 'swiper/css';
import classes from './MainContentSwiper.module.scss'

const MainContentSwiper = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
        swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
        swiperRef.current.slideNext();
        }
    };

    const javaA = ''
    const javaB = ''
    const javaC = ''

    return (
        <div className={classes.swiper_wrap}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <SwiperContent textA="JAVA" textB="SCRIPT" javaA={javaA} javaB={javaB} javaC={javaC}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperContent textB="REACT" />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperContent textB="VUE" />
                </SwiperSlide>
            </Swiper>
            <div className={classes.swiper_btns}>
                <button onClick={handlePrev}><MdOutlineKeyboardDoubleArrowLeft /></button>
                <button onClick={handleNext}><MdOutlineKeyboardDoubleArrowRight /></button>
            </div>
        </div>
    );
};

export default MainContentSwiper;
