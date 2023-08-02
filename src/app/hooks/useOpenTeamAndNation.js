// useOpenTeam.js
import React, { createContext, useContext, useState } from "react";

const OpenTeamContext = createContext();

export function useOpenTeam() {
  return useContext(OpenTeamContext);
}

export function OpenTeamProvider({ children }) {
  const [openTeam, setOpenTeam] = useState(false);
  const [openNation, setopenNation] = useState(false);

  const updateValueTeam = (newValue) => {
    setOpenTeam(newValue);
  };

  const updateValueNation = (newValue) => {
    setopenNation(newValue);
  };

  return (
    <OpenTeamContext.Provider
      value={{ openTeam, openNation, updateValueTeam, updateValueNation }}
    >
      {children}
    </OpenTeamContext.Provider>
  );
}
