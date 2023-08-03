// Team.jsx
import React from "react";
import { useOpen } from "../../hooks/useOpenTeamAndNation";
import { useFormContext } from "react-hook-form";

function Nationality() {
  const { openNation, updateValueNation } = useOpen();
  const methods = useFormContext()

  return (
    <div>
      <div className="flex items-center gap-2">
        <p>Nationality</p>
        <div className="flex items-center gap-2">
          <label
            className="flex items-center gap-1 hover:cursor-pointer"
            htmlFor="allnation"
          >
            <input
              type="radio"
              id="allnation"
              name="nationalityoption"
              onChange={() => {
                updateValueNation(false);
                const value = methods.getValues()
                const nationality = Object.keys(value).filter(
                  (key) => value[key] == "nationality"
                );
                nationality.map((item)=>{
                  methods.setValue(item,false);
                })
              }}
              checked={!openNation}
              value={"allnation"}
              className="hover:cursor-pointer"
            />
            All
          </label>

          <label
            className="flex items-center gap-1 hover:cursor-pointer"
            htmlFor="choosenation"
          >
            <input
              type="radio"
              id="choosenation"
              name="nationalityoption"
              onChange={() => {
                updateValueNation(true)
              }}
              checked={openNation}
              value={"choosenation"}
              className="hover:cursor-pointer"
            />
            Choose
          </label>
        </div>
      </div>
    </div>
  );
}

export default Nationality;
