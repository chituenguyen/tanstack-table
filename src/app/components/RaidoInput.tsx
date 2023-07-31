import { useFormContext } from "react-hook-form";

const RadioInput = ({ label, value }) => {
    const { register, control } = useFormContext();
  
    return (
      <div>
        <label>
          <input
            type="radio"
            value={value}
            {...register("radioOption")}
            defaultChecked={value==="1"?true:false}
          />
          {label}
        </label>
      </div>
    );
  };

  export default RadioInput;