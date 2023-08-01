import { useState } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};
type Props = {
  options: Option[];
  name: string;
  value: string;
}

const ButtonInput: React.FC<Props> = ({options,name,value})=>{
  const { control, register } = useFormContext();
  const [showOptions, setShowOptions] = useState(false);
  const appearances = useWatch({ name: name });
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0].value}
        render={({ field }) => (
          <div className="flex gap-2 relative">
            <button type="button" onClick={() => setShowOptions(!showOptions)}>
              {options.find((option) => option.value === field.value)?.label}
            </button>
            {showOptions && (
              <div className="bg-red-50 absolute">
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
            <input
              type="text"
              {...register(value)}
              className="border w-[42px]"
              disabled={appearances === "" || appearances === undefined}
            />
          </div>
        )}
      />
    </div>
  );
}

export default ButtonInput;