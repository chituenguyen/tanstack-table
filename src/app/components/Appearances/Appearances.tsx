import ButtonInput from "../share/ButtonInput";

const Appearances = [
  { label: "All", value: "a" },
  { label: "More than", value: "GT" },
  { label: "Equal", value: "EQ" },
  { label: "Less than", value: "LT" },
];

export default function () {
  return (
    <div className="flex items-center gap-2">
      Appearances
      <ButtonInput
        options={Appearances}
        name="appearances"
        value="appearValue"
      />
    </div>
  );
}
