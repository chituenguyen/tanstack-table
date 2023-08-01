import { useState, useEffect } from "react";
import InputCheckbox from "../share/InputCheckbox";
import Nationality from "../../const/Nationality";
import { useFormContext } from "react-hook-form";

export default function () {
  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (open) {
      setValue("nationality", "");
    }
  });

  return (
    <div>
      <div className="flex">
        <p>Nationality</p>
        <div className="flex">
          <label>
            <input
              type="radio"
              name="nationalityoption"
              onClick={() => setOpen(false)}
              checked={!open}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="nationalityoption"
              onClick={() => setOpen(true)}
              checked={open}
            />
            Choose
          </label>
        </div>
      </div>

      {open && (
        <InputCheckbox
          options={Nationality}
          name="nationality"
          label="Nationality"
        />
      )}
    </div>
  );
}
