// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import Team from "../../const/Nationality";
import { useOpenTeam } from "../../hooks/useOpenTeamAndNation";

function ShowNationality() {
  const { openNation } = useOpenTeam();

  return (
    <div className={`${openNation ? "block" : "hidden"}`}>
      <InputCheckbox options={Team} name="nationality" label="Nationality" />
    </div>
  );
}

export default ShowNationality;
