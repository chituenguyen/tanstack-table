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
        accessorKey: "totalShots",
        sorted: true,
      },
      {
        header: "Shot on target",
        accessorKey: "shotOnTarget",
        sorted: true,
      },
      {
        header: "Shot off target",
        accessorKey: "shotOffTarget",
        sorted: true,
      },
      {
        header: "Blocked shots",
        accessorKey: "blockShots",
        sorted: true,
      },
      {
        header: "Goal conversion",
        accessorKey: "goalConvension",
        sorted: true,
      },
      {
        header: "Penaties taken",
        accessorKey: "penatiesTaken",
        sorted: true,
      },
      {
        header: "Penaty goals",
        accessorKey: "penatyGoals",
        sorted: true,
      },
      {
        header: "Penaty won",
        accessorKey: "penaltyWon",
        sorted: true,
      },
      {
        header: "Shot from set piece",
        accessorKey: "shotFromSetPiece",
        sorted: true,
      },
      {
        header: "Free kick goals",
        accessorKey: "freeKickGoals",
        sorted: true,
      },
      {
        header: "Goals from inside the box",
        accessorKey: "goalFromInsideBox",
        sorted: true,
      },
      {
        header: "Goals from outside the box",
        accessorKey: "goalFromOutsideBox",
        sorted: true,
      },
      {
        header: "Headed goals",
        accessorKey: "headGoal",
        sorted: true,
      },
      {
        header: "Left foot goals",
        accessorKey: "leftFootGoals",
        sorted: true,
      },
      {
        header: "Right foot goals",
        accessorKey: "rightFootGoal",
        sorted: true,
      },
      {
        header: "Hit woodwork",
        accessorKey: "hitWoodWork",
        sorted: true,
      },
      {
        header: "Offsides",
        accessorKey: "offSides",
        sorted: true,
      },
      {
        header: "Penaties conversion",
        accessorKey: "penatiesConvesion",
        sorted: true,
      },
      {
        header: "Set piece conversion",
        accessorKey: "setPieceConversion",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
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
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Interceptions",
        accessorKey: "interceptions",
        sorted: true,
      },
      {
        header: "Penalty committed",
        accessorKey: "penaltyCommitted",
        sorted: true,
      },
      {
        header: "Clearances",
        accessorKey: "clearances",
        sorted: true,
      },
      {
        header: "Error lead to goal",
        accessorKey: "errorLeadToGoal",
        sorted: true,
      },
      {
        header: "Errors lead to shot",
        accessorKey: "errorLeadToShot",
        sorted: true,
      },
      {
        header: "Shot on target",
        accessorKey: "shotOnTarget",
        sorted: true,
      },
      {
        header: "Own goals",
        accessorKey: "ownGoals",
        sorted: true,
      },
      {
        header: "Dribbled past",
        accessorKey: "dribbledPast",
        sorted: true,
      },
      {
        header: "Clean sheets",
        accessorKey: "cleanSheet",
        sorted: true,
      },
      {
        header: "Penaties taken",
        accessorKey: "penatiesTaken",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
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
        accessorKey: "bigChancesCreated",
        sorted: true,
      },
      {
        header: "Assists",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Acc.passes",
        accessorKey: "accuratePasses",
        sorted: true,
      },
      {
        header: "Inaccurate passes",
        accessorKey: "inacuratePasses",
        sorted: true,
      },
      {
        header: "Accurate passes %",
        accessorKey: "accuratePassesPercentage",
        sorted: true,
      },
      {
        header: "Accurate own half passes",
        accessorKey: "accurateOwnHalfPasses",
        sorted: true,
      },
      {
        header: "Accurate opposition half passes",
        accessorKey: "accurateOppositeHalfPasses",
        sorted: true,
      },
      {
        header: "Accurate final third passes",
        accessorKey: "accurateFinalThirdPasses",
        sorted: true,
      },
      {
        header: "Key passes",
        accessorKey: "keyPasses",
        sorted: true,
      },
      {
        header: "Accurate crosses",
        accessorKey: "accurateCrosses",
        sorted: true,
      },
      {
        header: "Accurate crosses %",
        accessorKey: "accurateCrossesPercent",
        sorted: true,
      },
      {
        header: "Acc.long balls",
        accessorKey: "accurateLongBalls",
        sorted: true,
      },
      {
        header: "Acc.long balls %",
        accessorKey: "accurateLongBallsPercent",
        sorted: true,
      },
      {
        header: "Passes to assist",
        accessorKey: "passesToAssist",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
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
        accessorKey: "saves",
        sorted: true,
      },
      {
        header: "Clean sheets",
        accessorKey: "cleanSheet",
        sorted: true,
      },
      {
        header: "Penalties faced",
        accessorKey: "penaltiesFaced",
        sorted: true,
      },
      {
        header: "Penalties saved",
        accessorKey: "penaltiesSaved",
        sorted: true,
      },
      {
        header: "Saves from inside box",
        accessorKey: "saveFromInsideBox",
        sorted: true,
      },
      {
        header: "Saved shots from outside the box",
        accessorKey: "savedFromOutsideBox",
        sorted: true,
      },
      {
        header: "Goals conceded inside the box",
        accessorKey: "goalConcededInsideBox",
        sorted: true,
      },
      {
        header: "Goals conceded outside the box",
        accessorKey: "goalConcededOutsideBox",
        sorted: true,
      },
      {
        header: "Punches",
        accessorKey: "punches",
        sorted: true,
      },
      {
        header: "Run outs",
        accessorKey: "runsOut",
        sorted: true,
      },
      {
        header: "Successful runs out",
        accessorKey: "succesfulRunOut",
        sorted: true,
      },
      {
        header: "High claims",
        accessorKey: "highClaims",
        sorted: true,
      },
      {
        header: "Crosses not claimed",
        accessorKey: "crossesNotClaimed",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
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
        accessorKey: "yellowCards",
        sorted: true,
      },
      {
        header: "Red cards",
        accessorKey: "redCards",
        sorted: true,
      },
      {
        header: "Ground duels won",
        accessorKey: "groundDuelsWon",
        sorted: true,
      },
      {
        header: "Ground duels won %",
        accessorKey: "groundDuelsWonPercent",
        sorted: true,
      },
      {
        header: "Aerial duels won",
        accessorKey: "aerialDuelsWon",
        sorted: true,
      },
      {
        header: "Aerial duels won %",
        accessorKey: "aerialDuelsWonPercent",
        sorted: true,
      },
      {
        header: "Toal data won",
        accessorKey: "totalDataWon",
        sorted: true,
      },
      {
        header: "Toal data won %",
        accessorKey: "totalDataPercent",
        sorted: true,
      },
      {
        header: "Minutes played",
        accessorKey: "minutesPlayed",
        sorted: true,
      },
      {
        header: "Was fouled",
        accessorKey: "wasFouled",
        sorted: true,
      },
      {
        header: "Fouls",
        accessorKey: "fouls",
        sorted: true,
      },
      {
        header: "Disoissessed",
        accessorKey: "disoissessed",
        sorted: true,
      },
      {
        header: "Possession lost",
        accessorKey: "possessionLost",
        sorted: true,
      },
      {
        header: "Appearances",
        accessorKey: "appearances",
        sorted: true,
      },
      {
        header: "Started",
        accessorKey: "started",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
];

export default groupType;