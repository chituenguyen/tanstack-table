import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  name: string;
  label: string;
};

const OptionButton: React.FC<Props> = ({ options, name, label }) => {
  const { setValue } = useFormContext();
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  const handleSelectAll = () => {
    setSelectAll(true);
    setCheckboxes(options.map((item) => item.value));
  };

  const handleDeselectAll = () => {
    setSelectAll(false);
    setCheckboxes([]);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value;
    if (checkboxes.includes(checkboxValue)) {
      setCheckboxes(checkboxes.filter((value) => value !== checkboxValue));
    } else {
      setCheckboxes([...checkboxes, checkboxValue]);
    }
  };

  // Check if all individual checkboxes are selected
  useEffect(() => {
    if (checkboxes.length > 0 && checkboxes.length === options.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }

    // Update the value of the "selectedOptions" field
    setValue(name, checkboxes);
  }, [checkboxes, options, setValue]);

  return (
    <div>
      <div>
        <p>{label}</p>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectAll && checkboxes.length === options.length}
            />
            Select all
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleDeselectAll}
              checked={!selectAll && checkboxes.length === 0}
            />
            Deselect all
          </label>
        </div>
      </div>
      <div>
        {options.map((item) => (
          <label key={item.value}>
            <input
              type="checkbox"
              value={item.value}
              onChange={handleCheckboxChange}
              checked={checkboxes.includes(item.value)}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default OptionButton;
