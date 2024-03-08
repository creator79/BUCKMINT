import React from "react";
import { Button, SelectBox, Img, Text, Heading } from "../../components";

import { OptionProps } from "react-select";
import Dates from "../../components/Date/Date";

const Date = ({ isOpen }) => {
  const handleClose = (e) => {
    e.preventDefault();
    isOpen(false);
  }
  return (
    <>
      <div className="flex flex-col items-start justify-start w-[62%] sm:w-full mt-[17px] gap-[22px] sm:mt-0 cursor-pointer">
        <div className="flex flex-col items-center justify-start h-[24px] w-[24px] ml-[366px] md:ml-5" onClick={handleClose}>
          <Img
            src="images/img_arrow_right_blue_gray_500_01.svg"
            alt="arrowright_one"
            className="h-[24px] w-[24px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[91%] md:w-full gap-[31px]">
          <div className="flex flex-col items-start justify-start gap-[9px]">
            <Heading size="s" as="h1" className="!text-gray-900 !font-inter">
              Add team member
            </Heading>
            <Text
              size="md"
              as="p"
              className="!text-blue_gray-700 !font-inter !font-normal"
            >
              The following users have access to this meeting:
            </Text>
          </div>
          <Dates />
          <Button className="flex items-center justify-center  mt-[-2rem] h-[38px] px-[35px] sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded sm:min-w-full">
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Date;
