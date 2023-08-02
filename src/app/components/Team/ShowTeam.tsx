// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import Team from "../../const/Team";
import { useOpenTeam } from "../../hooks/useOpenTeamAndNation";

function ShowTeam({teams}) {
  const { openTeam } = useOpenTeam();

  return (
    <div className={`${openTeam ? "block" : "hidden"}`}>
      <InputCheckbox options={teams} name="team" label="Team" />
    </div>
  );
}

export default ShowTeam;
