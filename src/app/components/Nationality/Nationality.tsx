// Team.jsx
import React from "react";
import { useOpenTeam } from "../../hooks/useOpenTeamAndNation";

function Nationality() {
  const { openNation, updateValueNation } = useOpenTeam();

  return (
    <div>
      <div className="flex items-center gap-2">
        <p>Nationality</p>
        <div className="flex">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="nationalityoption"
              onClick={() => updateValueNation(false)}
              checked={!openNation}
            />
            All
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="nationalityoption"
              onClick={() => updateValueNation(true)}
              checked={openNation}
            />
            Choose
          </label>
        </div>
      </div>

    </div>
  );
}

export default Nationality;
