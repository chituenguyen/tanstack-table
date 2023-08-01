import { useFormContext } from "react-hook-form";

type RadioInputProps = {
  label: string;
  value: string;
};

const RadioInput: React.FC<RadioInputProps> = ({ label, value }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="flex items-center gap-1">
        <input type="radio" value={value} {...register("typeEQ")} />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
