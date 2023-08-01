import OptionButton from "../share/OptionButton";

export default function () {
  const PreferredFoot = [
    {
      label: "All",
      value: "",
    },
    {
      label: "Both",
      value: "Both",
    },
    {
      label: "Right",
      value: "Right",
    },
    {
      label: "Left",
      value: "Left",
    },
  ];
  return (
    <div className="flex items-center gap-2">
      Preferred foot
      <OptionButton options={PreferredFoot} name="preferredFoot" />
    </div>
  );
}
