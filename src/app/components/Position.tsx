import position from "../const/Position";
import CheckboxInputNew from "./CheckBoxNew";

export default function () {
  return (
    <div>
      Position
      {position.map((item) => (
        <CheckboxInputNew key={item.name} label={item.label} name={item.name} defaultChecked={true} value={'position'}/>
      ))}
    </div>
  );
}
