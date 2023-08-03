// Team.jsx
import React from "react";
import { useOpen } from "../../hooks/useOpenTeamAndNation";
import { useFormContext } from "react-hook-form";

function Team() {
  const { openTeam, updateValueTeam } = useOpen();
  const methods = useFormContext()

  return (
    <div>
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <p>Team</p>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              id="allteam"
              name="teamoption"
              onChange={() =>{
                updateValueTeam(false)
                const value = methods.getValues()
                const nationality = Object.keys(value).filter(
                  (key) => value[key] == "team"
                );
                nationality.map((item)=>{
                  methods.setValue(item,false);
                })
              }}
              checked={!openTeam}
              value={"all"}
              className="hover:cursor-pointer"
            />
            All
          </label>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <input
              type="radio"
              id="chooseteam"
              name="teamoption"
              onChange={() => updateValueTeam(true)}
              checked={openTeam}
              value={"choose"}
              className="hover:cursor-pointer"
            />
            Choose
          </label>
        </div>
      </div>

    </div>
  );
}

export default Team;
