import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
  thisistitle?: string;
  duration?: string;
}

export default function DashboardDesktopRowthisistitle({
  thisistitle = "Review candidate applications",
  duration = "Today - 11.30 AM",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-[71%] ml-1.5 gap-[5px]">
        <Text size="lg" as="p" className="mt-px !text-blue_gray-900_01">
          {thisistitle}
        </Text>
        <Text size="xs" as="p" className="!font-roboto !font-normal">
          {duration}
        </Text>
      </div>
      <div className="flex flex-row justify-start w-[19%] mr-1.5 gap-5">
        <Img src="images/img_ic_notifications.svg" alt="image" className="h-[24px] w-[24px]" />
        <Img src="images/img_carbon_overflow.svg" alt="image_one" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
