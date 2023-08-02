// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import { useOpenTeam } from "../../hooks/useOpenTeamAndNation";

function ShowNationality(nation:any) {
    console.log(nation)
  const { openNation } = useOpenTeam();
  const Nationality = Object.entries(nation.nation).map(([id, name]) => ({
    name,
    id,
  }));
  return (
    <div className={`${openNation ? "block" : "hidden"}`}>
      <InputCheckbox options={Nationality} name="nationality" label="Nationality" />
    </div>
  );
}

export default ShowNationality;
