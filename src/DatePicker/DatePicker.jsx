/* eslint-disable react/prop-types */

const DatePicker = ({ tittle, division }) => {
  return (
    <div className=" md:w-7/12 mx-auto">
      <div className=" md:mt-0 mt-14 p-6 rounded-md bg-white mx-auto w-full max-w-sm">
        <p className="font-Montserrat text-[#818181] mb-1 font-medium">
          {" "}
          Division
        </p>
        <input
          type="text"
          defaultValue={division}
          readOnly
          placeholder="Type here"
          className="input font-Montserrat font-medium focus:outline-none input-bordered input-md w-full max-w-sm"
        />{" "}
        <br /> <br />
        <p className="font-Montserrat text-[#818181] font-medium mb-1">
          {" "}
          Destination
        </p>
        <input
          type="text"
          defaultValue={tittle}
          readOnly
          placeholder="Type here"
          className="input font-Montserrat font-medium focus:outline-none input-bordered input-md w-full max-w-sm"
        />
        <div className="flex justify-between max-w-sm">
          <div className="flex flex-col w-[45%]">
            <p className="mt-5 font-Montserrat text-[#818181] font-medium mb-1">
              {" "}
              Form
            </p>
            <input
              type="date"
              className="input cursor-pointer font-Montserrat focus:outline-none input-bordered input-md max-w-sm"
            />
          </div>

          <div className="flex flex-col w-[45%]">
            <p className="mt-5 font-Montserrat text-[#818181] font-medium mb-1">
              {" "}
              To
            </p>
            <input
              type="date"
              className="input cursor-pointer font-Montserrat focus:outline-none input-bordered input-md max-w-sm"
            />
          </div>
        </div>
        <button className="btn mt-5 rounded w-full font-Montserrat bg-[#F9A51A] hover:bg-[#F9A51A]">
          Start Booking
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
