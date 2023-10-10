/* eslint-disable react/prop-types */
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useRef } from "react";
const Carousel = ({ heroData, setDescription,nextHandler1,setTitle, setActiveIndex, prevHandler1 ,setDivision}) => {
  const swiperRef = useRef(null);

  const nextHandler = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };
  const prevHandler = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };
  useEffect(() => {
    if (swiperRef.current !== null) {
      swiperRef.current.on("slideChange", () => {
        // Get the active slide index
        const newIndex = swiperRef.current.activeIndex;
        setActiveIndex(newIndex);

        // Get the text content of the active slide
        const activeSlide = swiperRef.current.slides[newIndex];
        const activeSlideText = activeSlide.querySelector("h1").textContent;
        const activeSlidedes = activeSlide.querySelector("p").textContent;
        const activeSlideDiv = activeSlide.querySelector("h5").textContent;
        setTitle(activeSlideText);
        setDescription(activeSlidedes)
        setDivision(activeSlideDiv)
      });
    }
  }, [])

  return (
    <div className="md:w-7/12 md:mt-0 mt-14 px-4">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        allowSlideNext={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination]}
        className="mySwiper"
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              className="relative rounded-lg md:h-[350px] object-cover opacity-90 w-full"
              alt=""
            />
            <h1 className="text-white text-sm md:text-4xl absolute bottom-3 left-[10%] md:left-[20%]">
              {item?.placeName}
            </h1>
            <p className="hidden">{item?.description}</p>
            <h5 className="hidden">{item?.division}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex md:mt-6 mt-5 gap-3">
        <IoIosArrowBack
          onClick={() => {
            prevHandler1();
            prevHandler();
          }}
          className="bg-base-100 text-4xl cursor-pointer rounded-full p-2 "
        />
        <IoIosArrowForward
          onClick={() => {
            nextHandler1();
            nextHandler();
          }}
          className="bg-base-100 text-4xl cursor-pointer rounded-full p-2 "
        />
      </div>
    </div>
  );
};

export default Carousel;
