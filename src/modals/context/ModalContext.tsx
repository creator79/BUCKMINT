import React, { createContext, useContext, useState } from "react";

//@ts-ignore
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 4. Create Custom Hook to use Context
export const useModal = () => useContext(ModalContext);
