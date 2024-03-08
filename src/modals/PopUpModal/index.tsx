import React, { useState } from "react";
import { Text } from "../../components";
import { default as ModalProvider } from "react-modal";
import TimeMode from "./Time";
import Team from "./Team";
import DateComponent from "./Date";
import { useModal } from "../context/ModalContext"; // Importing the useModal hook

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function PopUpModal({ ...props }: Props) {
  // @ts-ignore
  const { isModalOpen, toggleModal } = useModal(); // Using the useModal hook

  const [timeActive, setTimeActive] = useState(false);
  const [teamActive, setTeamActive] = useState(false);
  const [dateActive, setDateActive] = useState(false);

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isModalOpen} // Using the isModalOpen state
      className="min-w-[662px]"
    >
      <div className="flex flex-row sm:flex-col justify-between items-start w-full pr-[30px] sm:gap-10 sm:pr-5 bg-white-A700 rounded-[16px]">
        <div className="flex flex-col items-center justify-end w-[33%] sm:w-full p-[22px] sm:p-5 bg-gray-50 rounded-[12px]">
          <div className="flex flex-col items-start justify-start w-full mt-[147px] mb-[137px] gap-[49px] ">
            <div className="flex flex-col items-start justify-start ml-3 gap-[59px] md:ml-0 cursor-pointer">
              <Text
                size="md"
                as="p"
                className={
                  timeActive ? "!text-red-A200" : "!text-blue_gray-800_01 "
                }
                onClick={() => {
                  setTimeActive(true);
                  setTeamActive(false);
                  setDateActive(false);
                }}
              >
                Time
              </Text>
              <Text
                size="md"
                as="p"
                className={
                  dateActive
                    ? "!text-red-A200"
                    : "ml-[3px] md:ml-0 !text-blue_gray-800_01"
                }
                onClick={() => {
                  setTimeActive(false);
                  setTeamActive(false);
                  setDateActive(true);
                }}
              >
                Date
              </Text>
            </div>
            <div className="flex flex-row justify-end p-2">
              <Text
                size="md"
                as="p"
                className={
                  teamActive
                    ? "!text-red-A200 my-px"
                    : "my-px !text-blue_gray-800_01 cursor-pointer"
                }
                onClick={() => {
                  setTimeActive(false);
                  setTeamActive(true);
                  setDateActive(false);
                }}
              >
                Add team member
              </Text>
            </div>
          </div>
        </div>
        {timeActive && <TimeMode isOpen={toggleModal} />}
        {teamActive && <Team isTeam={toggleModal} />}
        {dateActive && <DateComponent  isOpen={toggleModal}/>}
      </div> 
    </ModalProvider>
  );
}
