import React from "react";
import './App.css';

import TimeLineItem from "./components/TimeLineItem/TimeLineItem";

import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import './components/styles/swiper-buttons.scss'


import timeline from './data/TimeLineData'


function App() {

    return (
        <div className="App">
            <div className="history">
                <h1 className="history__title">История</h1>
                <div className="history__description">
                    Устойчивая стратегия роста, концентрация на основных компетенциях и клиентоориентированность —
                    ключевые факторы успеха на рынке металлопродукции в течение 17 лет.
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={"auto"}
                navigation={true}
            >
                {timeline.map(block =>
                    <SwiperSlide key={block.year}>
                        <TimeLineItem year={block.year} info={block.info}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default App;