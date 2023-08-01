import { useState, useEffect } from "react";
import InputCheckbox from "../share/InputCheckbox";
import Team from "../../const/team";
import { useFormContext } from "react-hook-form";

export default function () {
  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (open) {
      setValue("team", "");
    }
  });

  return (
    <div>
      <div className="flex">
        <p>Team</p>
        <div className="flex">
          <label>
            <input
              type="radio"
              name="teamoption"
              onClick={() => setOpen(false)}
              checked={!open}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="teamoption"
              onClick={() => setOpen(true)}
              checked={open}
            />
            Choose
          </label>
        </div>
      </div>

      {open && <InputCheckbox options={Team} name="team" label="Team" />}
    </div>
  );
}
