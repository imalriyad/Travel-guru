/* eslint-disable react/prop-types */
import Textshow from "./Textshow";
import Carousel from "./Carousel";
import { useState } from "react";

const Hero = ({ heroData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [Ttitle,setTitle] = useState('')
  const [description,setDescription] = useState('')

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
    const newIndex = Math.abs(
      isFirstIndex ? activeIndex - 4 : activeIndex - 1
    );
    
    setActiveIndex(newIndex);
  };
  
  return (
    <div className="md:flex md:py-32 items-start max-w-screen-2xl mx-auto">
      <Textshow heroData={heroData} description={description} Ttitle={Ttitle}></Textshow>
      <Carousel
        heroData={heroData}
        prevHandler1={prevHandler1}
        nextHandler1={nextHandler1}
        setTitle={setTitle}
        setActiveIndex={setActiveIndex}
        setDescription={setDescription}
      />
    </div>
  );
};

export default Hero;
