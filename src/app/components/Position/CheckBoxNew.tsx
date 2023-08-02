import { useFormContext } from "react-hook-form";

type CheckboxInputProps = {
  label: string;
  name: string;
  defaultChecked: boolean;
  value: string;
  onChange? : (value: string, checked:boolean) => void;
};

const CheckboxInputNew: React.FC<CheckboxInputProps> = ({
  label,
  name,
  defaultChecked,
  value,
  onChange
}) => {
  const { register } = useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if (onChange) {
      onChange(e.target.name,e.target.checked); // Call the onChange function with the checkbox value
    }
  }
  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          {...register(name)}
          value={value}
          onChange={(e)=>handleChange(e)}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxInputNew;
