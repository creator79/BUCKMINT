import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import DashboardDesktop from "pages/DashboardDesktop";
import DeskTwo from "./modals/PopUpModal";
import { ModalProvider } from "./modals/context/ModalContext"; // Importing the ModalProvider

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <DashboardDesktop />,
    },
    {
      path: "/desk",
      element: <DeskTwo isOpen={true} />,
    },
  ]);

  // Wrap useRoutes within ModalProvider
  return <ModalProvider>{element}</ModalProvider>;
};

export default ProjectRoutes;
