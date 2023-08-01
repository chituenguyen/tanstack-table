import { useFormContext } from "react-hook-form";

const CheckboxInputNew = ({ label, name, defaultChecked, value }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          {...register(name)}
          value={value}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxInputNew;
