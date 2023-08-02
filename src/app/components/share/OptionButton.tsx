import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};
type OptionButtonProps = {
  options: Option[];
  name: string;
};
export default function OptionButton({ options, name }: OptionButtonProps) {
  const { control } = useFormContext();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0].value}
        render={({ field }) => (
          <div className="relative">
            <button type="button" onClick={() => setShowOptions(!showOptions)}>
              {options.find((option) => option.value === field.value)?.label}
            </button>
            {showOptions && (
              <div className="bg-red-50 absolute flex flex-col">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      field.onChange(option.value);
                      setShowOptions(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}
