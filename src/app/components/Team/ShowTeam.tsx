// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import Team from "../../const/Team";
import { useOpenTeam } from "../../hooks/useOpenTeamAndNation";

function ShowTeam(teams: any) {
  const { openTeam } = useOpenTeam();

  return (
    <div className={`${openTeam ? "block" : "hidden"} mt-2 bg-surface-1 p-3 rounded-lg`}>
      <InputCheckbox options={teams.teams} name="team" label="Team" />
    </div>
  );
}

export default ShowTeam;
