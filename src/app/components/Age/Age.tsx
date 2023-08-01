import ButtonInput from "../share/ButtonInput";

const Appearances = [
    { label: "All", value: "" },
    { label: "More than", value: "GT" },
    { label: "Equal", value: "EQ" },
    { label: "Less than", value: "LT" }
  ];

export default function() {
    return (
        <div className="flex gap-2">
            Age 
            <ButtonInput options={Appearances} name="age" value="ageValue"/>
        </div>
    );
}