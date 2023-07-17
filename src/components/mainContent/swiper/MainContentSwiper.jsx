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

    const javaA = './img/porsche_java.jpg'
    const javaB = './img/fst_java.png'
    const javaC = './img/genesis_java.png'
    const reactA = '/img/react1.png'
    const reactB = '/img/react2.png'
    const reactC = '/img/react3.png'
    const vueA = '/img/locked.png'
    const vueB = ''
    const vueC = ''

    return (
        <div className={classes.swiper_wrap}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <SwiperContent textA="JAVA" textB="SCRIPT" imgA={javaA} imgB={javaB} imgC={javaC}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperContent textB="REACT" imgA={reactA} imgB={reactB} imgC={reactC}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperContent textB="VUE" imgA={vueA} imgB={vueB} imgC={vueC} />
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
