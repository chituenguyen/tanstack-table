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
      <div className="flex items-center gap-2">
        <p>Nationality</p>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="nationalityoption"
              onClick={() => setOpen(false)}
              checked={!open}
            />
            All
          </label>
          <label className="flex items-center gap-1">
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
