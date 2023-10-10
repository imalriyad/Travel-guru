/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Textshow = ({ description,isclicked, ttitle, setClicked }) => {

  return (
    <div className="md:w-5/12  md:px-0 px-4">
      <h1 className="text-white font-bold mt-5 text-5xl md:text-7xl tracking-wider">
        {ttitle}
      </h1>
      <p className="font-Montserrat md:text-base text-sm mt-3 md:pr-32 text-[#FFFFFF]">
        {description}
      </p>

      {isclicked ? (
        <button
          onClick={() => setClicked(false)}
          className="px-4 flex items-center gap-x-1 mt-5 rounded font-Montserrat font-medium text-black py-2 bg-[#F9A51A]"
        >
         <AiOutlineArrowLeft className="text-xl" />Back
        </button>
      ) : (
        <button
          onClick={() => setClicked(true)}
          className="px-4 flex items-center gap-x-1 mt-5 rounded font-Montserrat font-medium text-black py-2 bg-[#F9A51A]"
        >
          Booking <AiOutlineArrowRight className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default Textshow;
