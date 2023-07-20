import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Resize } from "./Resize";
import ProjectData from "./Styles/data/ProjectData.json";

export const Projects = () => {
  const windowSize = Resize();
  const pData = ProjectData.projectData;
  return (
    <section className="project--section" id="projects">
      <h2 data-aos="fade-up">
        Projects <span className="shadow--font">Projects</span>
      </h2>
      <div className="project--wrapper">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={windowSize > 1400 ? 50 : 18}
          slidesPerView={
            windowSize < 600
              ? 1.1
              : windowSize > 1000
              ? windowSize > 1200
                ? windowSize > 1400
                  ? 3
                  : 2.8
                : 2
              : 1.8
          }
          className="mySwiper"
          loop={true}
        >
          {pData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="project--card">
                  <div className="card">
                    <img loading="lazy" src={data.image} alt={data.name} />
                    <h3>{data.name}</h3>
                    <div className="link--wrapper">
                      <a target="_blank" href={data.github}>
                        Github
                      </a>
                      <a target="_blank" href={data.live}>
                        Live Url
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
