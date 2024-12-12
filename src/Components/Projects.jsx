import { useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Resize } from "./Resize";
import ProjectData from "./Styles/data/ProjectData.json";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const Projects = () => {
  const windowSize = Resize();
  const pData = ProjectData.projectData;
  const swiperRef = useRef();
  const [end, setEnd] = useState(false);
  const [begin, setBegin] = useState(true);

  return (
    <section className="project--section" id="projects">
      <h2 data-aos="fade-up">
        Projects <span className="shadow--font">Projects</span>
      </h2>
      <div className="navigation--buttons">
        <button
          disabled={begin}
          onClick={() => swiperRef.current?.slidePrev()}
          className="nav--btn"
        >
          <IoChevronBack />
        </button>
        <button
          disabled={end}
          onClick={() => swiperRef.current?.slideNext()}
          className="nav--btn"
        >
          <IoChevronForward />
        </button>
      </div>
      <div className="project--wrapper">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: windowSize > 600 && true }}
          spaceBetween={windowSize > 1400 ? 50 : 18}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setEnd(swiper.isEnd);
            setBegin(swiper.isBeginning);
          }}
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
          // loop={true}
          className="mySwiper"
        >
          {pData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="project--card">
                  <div className="card">
                    <img loading="lazy" src={data.image} alt={data.name} />
                    <h3 className="my-10">{data.name}</h3>
                    <div className="link--wrapper">
                      {data.github && (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(data.github);
                          }}
                          href={data.github}
                        >
                          Github
                        </a>
                      )}
                      {data.live && (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(data.live);
                          }}
                          href={data.live}
                        >
                          Live Url
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="more--container">
              <a
                className="more--btn"
                href="https://www.frontendmentor.io/profile/dazzlerabhi30800"
                target="_blank"
              >
                See my frontend profile
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
