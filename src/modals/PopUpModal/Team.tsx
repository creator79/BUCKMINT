import React from "react";
import { Button, SelectBox, Img, Text, Heading } from "../../components";

import { OptionProps } from "react-select";


const Team = ({isTeam}) => {
  const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const handleClose = (e) => {
    e.preventDefault();
    isTeam(false);
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
          <div className="flex flex-col w-full gap-[11px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start w-[58%] gap-3">
                <Img
                  src="images/img_avatar.png"
                  alt="candice_wu_one"
                  className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                />
                <div className="flex flex-col items-start justify-start w-[75%] gap-0.5">
                  <Heading as="h2" className="!text-blue_gray-800">
                    Candice Wu
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-blue_gray-700 !font-roboto !font-normal"
                  >
                    candice@untitledui.com
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="h3">Remove</Heading>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start w-[53%] gap-3">
                <Text
                  size="lg"
                  as="p"
                  className="flex justify-center items-center h-[40px] w-[40px] !text-blue_gray-700 !font-inter text-center !font-medium bg-gray-100 rounded-[50%]"
                >
                  DW
                </Text>
                <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                  <Heading as="h4" className="!text-blue_gray-800">
                    Demi Wilkinson
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-blue_gray-700 !font-roboto !font-normal"
                  >
                    demi@untitledui.com
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="h5">Remove</Heading>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start w-[53%] gap-3">
                <Img
                  src="images/img_avatar_40x40.png"
                  alt="avatar_one"
                  className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                />
                <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                  <Heading as="h6" className="!text-blue_gray-800">
                    Drew Cano
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-blue_gray-700 !font-roboto !font-normal"
                  >
                    drew@untitledui.com
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="p">Remove</Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-8">
            <div className="flex flex-col items-start justify-start w-full gap-[5px]">
              <Text size="md" as="p" className="!text-blue_gray-800">
                Team member
              </Text>
              <SelectBox
                indicator={
                  <Img
                    src="images/img_arrowdown_blue_gray_500_01.svg"
                    alt="arrow_down"
                  />
                }
                getOptionLabel={(e: OptionProps) => (
                  <>
                    <div className="flex items-center">
                      <Img src="images/img_search.svg" alt="search" />
                      <span>{e.label}</span>
                    </div>
                  </>
                )}
                name="search"
                placeholder="Select team member"
                options={dropDownOptions}
                className="w-full px-[35px] py-3 text-black-900 font-roboto text-base border-blue_gray-100 border border-solid bg-white-A700 shadow-sm rounded-lg"
              />
            </div>
            <Button className="flex items-center justify-center h-[38px] px-[35px] sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded sm:min-w-full">
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
