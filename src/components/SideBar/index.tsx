import React from "react";
import { Text, Img } from "..";
import { Menu, Sidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Componet2({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="243px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Img src="images/img_logo.svg" alt="logo_one" className="h-[62px] mt-5 ml-[57px] mr-[58px] md:mx-5" />
      <div className="flex flex-row justify-start w-full mt-[39px] p-[11px]">
        <Text size="s" as="p" className="ml-[18px] !text-gray-700_87 !font-roboto !font-medium opacity-0.5">
          MAIN MENU
        </Text>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: { color: "#ff5151", fontWeight: "500 !important" },
          },
        }}
        className="flex flex-col items-start justify-start w-full mt-[71px] pl-[30px] pr-[75px] md:pr-5 sm:px-5"
      >
        <div className="flex flex-col items-center justify-start w-full gap-[55px] md:gap-[56.83px]">
          <div className="flex flex-row justify-start w-full gap-6 py-[15px]">
            <Img src="images/img_ic_dashboard.svg" alt="icdashboard_one" className="h-[24px] w-[24px]" />
            <Text size="lg" as="p">
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full gap-6 py-[15px]">
            <Img src="images/img_ic_recruitment.svg" alt="icrecruitment" className="h-[24px] w-[24px]" />
            <Text size="lg" as="p">
              Recruitment
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full gap-6 py-[15px]">
            <Img src="images/img_ic_calendar.svg" alt="iccalendar_one" className="h-[24px] w-[24px]" />
            <Text size="lg" as="p">
              Schedule
            </Text>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-6 py-3.5">
            <Img src="images/img_ic_employee.svg" alt="icemployee_one" className="h-[20px] w-[20px]" />
            <Text size="lg" as="p">
              Employee
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full gap-6 py-[15px]">
            <Img src="images/img_ic_department.svg" alt="icdepartment" className="h-[24px] w-[24px]" />
            <Text size="lg" as="p">
              Department
            </Text>
          </div>
        </div>
        <div className="flex flex-row justify-start mt-[11px]">
          <Text size="s" as="p" className="!text-gray-700_87 !font-roboto !font-medium opacity-0.5">
            OTHER
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[67px] gap-[55px] md:gap-[56.83px]">
          <div className="flex flex-row justify-start w-full gap-6 py-[15px]">
            <Img src="images/img_ic_support.svg" alt="icsupport_one" className="h-[24px] w-[24px]" />
            <Text size="lg" as="p" className="mr-2.5">
              Support
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full gap-6 py-[15px]">
            <Img src="images/img_ic_settings.svg" alt="icsettings_one" className="h-[24px] w-[24px]" />
            <Text size="lg" as="p" className="mr-[9px]">
              Settings
            </Text>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
