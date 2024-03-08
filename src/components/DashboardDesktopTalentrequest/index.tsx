import React from "react";
import { Button, Img, Text } from "./..";

interface Props {
  className?: string;
  totalemployees?: string;
  twohundredsixte?: string;
  mencounter?: string;
  womencounter?: string;
  two?: string;
  p2pastmonth?: string;
}

export default function DashboardDesktopTalentrequest({
  totalemployees = "Total Employees",
  twohundredsixte = "216",
  mencounter = "120 Men",
  womencounter = "96 Women",
  two = "+2%",
  p2pastmonth = "+2% Past month",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[150px] w-[149px] gap-[13px]">
        <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-px">
          <Text as="p" className="!text-black-900_33">
            {totalemployees}
          </Text>
          <Text size="4xl" as="p" className="!text-black-900_33">
            {twohundredsixte}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[99%] md:w-full gap-[7px]">
          <Text size="s" as="p" className="!font-roboto">
            {mencounter}
          </Text>
          <Text size="s" as="p" className="!font-roboto">
            {womencounter}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start w-[43%] gap-5">
        <div className="flex flex-row justify-end w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text size="xs" as="p" className="ml-[42px] md:ml-5 !text-red-A200 !font-rubik z-[1]">
              {two}
            </Text>
            <div className="h-[69px] w-full mt-[-2px] relative">
              <Img
                src="images/img_vector_2.svg"
                alt="total_employees"
                className="h-[41px] top-0 right-0 left-0 m-auto absolute"
              />
              <Img
                src="images/img_vector_3.png"
                alt="total_employees"
                className="justify-center h-[69px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_frame_20.svg"
                alt="total_employees"
                className="h-[16px] w-[16px] left-[40%] top-[1%] m-auto absolute"
              />
            </div>
          </div>
        </div>
        <Button className="flex items-center justify-center h-[24px] px-2.5 text-blue_gray-900_01 font-roboto text-center text-xs bg-deep_orange-50 min-w-[107px] rounded sm:min-w-full">
          {p2pastmonth}
        </Button>
      </div>
    </div>
  );
}
