import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Resize } from "./Resize";


export const Projects = () => {
  const windowSize = Resize();
  // console.log(windowSize);
  return (
    <section className="project--section" id="projects">
      <h2 data-aos="fade-up">
        Projects <span className="shadow--font">Projects</span>
      </h2>
      <div className="project--wrapper">
      <Swiper
      spaceBetween={20}
      slidesPerView={windowSize < 600 ? 1 : 2}
      className="mySwiper"
      rewind={true}
      >
        <SwiperSlide>
        <div className="project--card" >
          <div className="card">
            <img src="./Project-img/epic-games.png" alt="" />
            <h3>Rock Paper Scissors</h3>
            <button>Github</button>
            <button>Live Url</button>
          </div>
        </div>
        </SwiperSlide>
<SwiperSlide >
        <div className="project--card" > 
          <div className="card">
            <img src="./Project-img/movie-app.png" alt="" />
            <h3>Rock Paper Scissors</h3>
            <button>Github</button>
            <button>Live Url</button>
          </div>
        </div>
        </SwiperSlide>
<SwiperSlide >
        <div className="project--card" > 
          <div className="card">
            <img src="./Project-img/netflix-landing-page.png" alt="" />
            <h3>Rock Paper Scissors</h3>
            <button>Github</button>
            <button>Live Url</button>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};
