/* eslint-disable react/prop-types */
import Textshow from "./Textshow";
import Carousel from "./Carousel";
import { useState } from "react";
import DatePicker from "../../DatePicker/DatePicker";

const Hero = ({ heroData }) => {
  const [isclicked, setClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tittle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [division, setDivision] = useState("");
  const nextHandler1 = () => {
    const isFirstIndex = activeIndex === 3;
    const newIndex = Math.abs(
      isFirstIndex ? activeIndex - activeIndex : activeIndex + 1
    );
    setActiveIndex(newIndex);
  };
  const prevHandler1 = () => {
    activeIndex + 1;
    const isFirstIndex = activeIndex === 0;
    const newIndex = Math.abs(isFirstIndex ? activeIndex - 4 : activeIndex - 1);
    setActiveIndex(newIndex);
  };

  return (
    <div className="md:flex justify-between md:py-32 items-start max-w-screen-2xl mx-auto">
      <Textshow
        setClicked={setClicked}
        description={description}
        ttitle={tittle}
        isclicked={isclicked}
      ></Textshow>
      {isclicked ? (
        <DatePicker tittle={tittle} division={division}></DatePicker>
      ) : (
        <Carousel
          heroData={heroData}
          prevHandler1={prevHandler1}
          nextHandler1={nextHandler1}
          setTitle={setTitle}
          setActiveIndex={setActiveIndex}
          setDescription={setDescription}
          setDivision={setDivision}
        />
      )}
    </div>
  );
};

export default Hero;
