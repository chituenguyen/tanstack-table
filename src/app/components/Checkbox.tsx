// components/CheckboxInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  label: string;
  name: string;
  initialData?: any; // Assuming `initialData` is of type `InitialData`
  onChange?: (checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, name, initialData, onChange }) => {
  const {
    register,
  } = useFormContext();

  // Find the corresponding item in initialData based on accessorKey
  const item = initialData.data.find((dataItem:any) => dataItem.accessorKey === name);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        {...register(name)}
        checked={item?true:false} 
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
