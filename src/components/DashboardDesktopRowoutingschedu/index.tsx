import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
  outingschedule?: string;
  duration?: string;
  image?: string;
}

export default function DashboardDesktopRowoutingschedu({
  outingschedule = "Outing schedule for every departement",
  duration = "5 Minutes ago",
  image = "images/img_bi_pin_angle_fill.svg",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center ml-1 gap-[5px]">
        <Text size="lg" as="p" className="mt-px !text-blue_gray-900_01">
          {outingschedule}
        </Text>
        <Text size="xs" as="p" className="!font-roboto !font-normal">
          {duration}
        </Text>
      </div>
      <div className="flex flex-row justify-start mr-1 gap-5">
        <Img src={image} alt="image" className="h-[24px] w-[24px]" />
        <Img src="images/img_carbon_overflow.svg" alt="image_one" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
