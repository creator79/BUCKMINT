import React, { useState } from "react";
import { Button, Img, Text, Heading } from "../../components";

const Time = ({ isOpen }) => {
  const [hour1, setHour1] = useState("0");
  const [hour2, setHour2] = useState("0");
  const [minute1, setMinute1] = useState("0");
  const [minute2, setMinute2] = useState("0");

  const handleHour1Change = (event) => {
    setHour1(event.target.value);
  };

  const handleHour2Change = (event) => {
    setHour2(event.target.value);
  };

  const handleMinute1Change = (event) => {
    setMinute1(event.target.value);
  };

  const handleMinute2Change = (event) => {
    setMinute2(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    isOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-start justify-centre gap-[34px] w-40 ">
        <div className="flex flex-row justify-start">
          <div className="flex flex-col items-start justify-start ">
            <div className="flex flex-row md:flex-col justify-start items-center md:gap-5">
              <div className="flex flex-col items-start justify-center  ml-[-14rem] md:w-full gap-[5px] ">
                <Heading size="s" as="h1" className="mt-px !text-gray-900">
                  Select a time for meeting
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="!text-blue_gray-700 !font-roboto !font-normal"
                >
                  The following time will be set for the meeting:
                </Text>
              </div>
              <div className="flex flex-row justify-end md:w-full  md:ml-0">
                <div
                  className="flex flex-row justify-start w-full py-[43px] md:py-5 cursor-pointer"
                  onClick={handleClick}
                
                >
                  <Img
                    src="images/img_arrow_right.svg"
                    alt="arrowright_one"
                    className="h-[12px] w-[12px] mb-40"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start  ml-[-10rem] md:w-full mt-[-33px] gap-2 ">
              <div className="flex flex-col items-start justify-start gap-2.5  mt-[-3rem] ml-[-4rem]">
                <div className="flex flex-row justify-centre gap-3.5 w-20  ">
                  <input
                    type="text"
                    className="flex items-center justify-center h-[46px] px-[18px] text-black-900 font-inter text-center text-sm !bg-gray-300_01 min-w-[46px] !rounded-lg"
                    value={hour1}
                    onChange={handleHour1Change}
                  />
                  <input
                    type="text"
                    className="flex items-center justify-center h-[46px] px-[18px] text-black-900 font-inter text-center text-sm !bg-gray-300_01 min-w-[46px] !rounded-lg"
                    value={hour2}
                    onChange={handleHour2Change}
                  />
                </div>
                <Text
                  size="s"
                  as="p"
                  className="text-blue_gray-700_7e font-inter opacity-0.4 "
                >
                  time in 24 hr format
                </Text>
              </div>
              <div className="flex flex-row justify-start  gap-3.5 mt-[-3rem] ml-[-1rem]  w-10 h-[46px] px-[18px] ">
                <input
                  type="text"
                  className="flex items-center justify-center h-[46px] px-[18px] text-black-900 font-inter text-center text-sm !bg-gray-300_01 min-w-[46px] !rounded-lg "
                  value={minute1}
                  onChange={handleMinute1Change}
                />
                <input
                  type="text"
                  className="flex items-center justify-center h-[46px] px-[18px] text-black-900 font-inter text-center text-sm !bg-gray-300_01 min-w-[46px] !rounded-lg"
                  value={minute2}
                  onChange={handleMinute2Change}
                />
              </div>
            </div>
          </div>
        </div>
        <Button className="flex items-center justify-center ml-[-14rem] h-[38px] px-[35px] sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded sm:min-w-full">
          Next
        </Button>
      </div>
    </>
  );
};

export default Time;
