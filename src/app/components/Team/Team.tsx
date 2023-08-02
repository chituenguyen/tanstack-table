// Team.jsx
import React from "react";
import { useOpenTeam } from "../../hooks/useOpenTeamAndNation";

function Team() {
  const { openTeam, updateValueTeam } = useOpenTeam();

  return (
    <div>
      <div className="flex items-center gap-2">
        <p>Team</p>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="teamoption"
              onClick={() => updateValueTeam(false)}
              checked={!openTeam}
            />
            All
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="teamoption"
              onClick={() => updateValueTeam(true)}
              checked={openTeam}
            />
            Choose
          </label>
        </div>
      </div>

    </div>
  );
}

export default Team;
