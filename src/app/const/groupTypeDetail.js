const groupType = [
  {
    id: 0,
    name: "Attack",
    data: [
      {
        header: "Goals",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Expected Goals",
        accessorKey: "expectedGoals",
        sorted: true,
      },
      {
        header: "Big chances missed",
        accessorKey: "bigChancesMissed",
        sorted: true,
      },
      {
        header: "Succ. dribbles",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "successful dribbles %",
        accessorKey: "successfulDribblesPercent",
        sorted: true,
      },
      {
        header: "Total shots",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Shot on target",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Shot off target",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Blocked shots",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Goal conversion",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Penaties taken",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Penaty goals",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Penaty won",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Shot from set piece",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Free kick goals",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Goals from inside the box",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Goals from outside the box",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Headed goals",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Left foot goals",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Right foot goals",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Hit woodwork",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Offsides",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Penaties conversion",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Set piece conversion",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "assists",
        sorted: true,
      },
    ],
  },
  {
    id: 1,
    name: "Defence",
    data: [
      {
        header: "Tackles",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Interceptions",
        accessorKey: "expectedGoals",
        sorted: true,
      },
      {
        header: "Penalty committed",
        accessorKey: "bigChancesMissed",
        sorted: true,
      },
      {
        header: "Clearances",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Error lead to goal",
        accessorKey: "successfulDribblesPercent",
        sorted: true,
      },
      {
        header: "Errors lead to shot",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Shot on target",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Own goals",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Dribbled past",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Clean sheets",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Penaties taken",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "assists",
        sorted: true,
      },
    ],
  },
  {
    id: 3,
    name: "Passing",
    data: [
      {
        header: "Big chances created",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Assists",
        accessorKey: "expectedGoals",
        sorted: true,
      },
      {
        header: "Acc.passes",
        accessorKey: "bigChancesMissed",
        sorted: true,
      },
      {
        header: "Inaccurate passes",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Accurate passes %",
        accessorKey: "successfulDribblesPercent",
        sorted: true,
      },
      {
        header: "Accurate own half passes",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Accurate opposition half passes",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Accurate final third passes",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Key passes",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Accurate crosses",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Accurate crosses %",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Acc.long balls",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Acc.long balls %",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Passes to assist",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "assists",
        sorted: true,
      },
    ],
  },
  {
    id: 4,
    name: "Goalkeeper",
    data: [
      {
        header: "Saves",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Clean sheets",
        accessorKey: "expectedGoals",
        sorted: true,
      },
      {
        header: "Penalties faced",
        accessorKey: "bigChancesMissed",
        sorted: true,
      },
      {
        header: "Penalties saved",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Saves from inside box",
        accessorKey: "successfulDribblesPercent",
        sorted: true,
      },
      {
        header: "Saved shots from outside the box",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Goals conceded inside the box",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Goals conceded outside the box",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Punches",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Run outs",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Successful runs out",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "High claims",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Crosses not claimed",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "assists",
        sorted: true,
      },
    ],
  },
  {
    id: 5,
    name: "Other",
    data: [
      {
        header: "Yellow cards",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Red cards",
        accessorKey: "expectedGoals",
        sorted: true,
      },
      {
        header: "Ground duels won",
        accessorKey: "bigChancesMissed",
        sorted: true,
      },
      {
        header: "Ground duels won %",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Aerial duels won",
        accessorKey: "successfulDribblesPercent",
        sorted: true,
      },
      {
        header: "Aerial duels won %",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Toal data won",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Toal data won %",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Minutes played",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Was fouled",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Fouls",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Disoissessed",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Possession lost",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Appearances",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Started",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "assists",
        sorted: true,
      },
    ],
  },
];

export default groupType;