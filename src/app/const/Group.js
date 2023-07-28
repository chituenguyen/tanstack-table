const columns = [
  {
    id: 0,
    name: "Summary",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
      },
      {
        header: "Cầu thủ",
        accessorKey: "player.name",
      },
      {
        header: "Bàn thắng",
        accessorKey: "goals",
      },
      {
        header: "Mục tiêu dự kiến",
        accessorKey: "expectedGoals",
      },
      {
        header: "Rê bóng thành công",
        accessorKey: "successfulDribbles",
      },
      {
        header: "Tắc bóng",
        accessorKey: "tackles",
      },
      {
        header: "Kiến tạo",
        accessorKey: "assists",
      },
      {
        header: "Tỉ lệ chuyền bóng thành công",
        accessorKey: "accuratePassesPercentage",
      },
      {
        header: "Điểm số",
        accessorKey: "rating",
      },
    ],
  },
  {
    id: 1,
    name: "Attack",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
      },
      {
        header: "Cầu thủ",
        accessorKey: "player.name",
      },
      {
        header: "Bàn thắng",
        accessorKey: "goals",
      },
      {
        header: "Cơ hội lớn bỏ lỡ",
        accessorKey: "bigChancesMissed",
      },
      {
        header: "Rê bóng thành công",
        accessorKey: "successfulDribbles",
      },
      {
        header: "Số cú sút",
        accessorKey: "totalShots",
      },
      {
        header: "Phần trăm chuyển hoá cơ hội",
        accessorKey: "goalConversionPercentage",
      },
      {
        header: "Điểm số",
        accessorKey: "rating",
      },
    ],
  },
  {
    id: 2,
    name: "Defence",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
      },
      {
        header: "Cầu thủ",
        accessorKey: "player.name",
      },
      {
        header: "Tắc bóng",
        accessorKey: "tackles",
      },
      {
        header: "Số lần đánh chặn",
        accessorKey: "interceptions",
      },
      {
        header: "Phá bóng",
        accessorKey: "clearances",
      },
      {
        header: "Phạm lỗi dẫn đến bàn thắng",
        accessorKey: "errorLeadToGoal",
      },
      {
        header: "Điểm số",
        accessorKey: "rating",
      },
    ],
  },
  {
    id: 3,
    name: "Passing",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
      },
      {
        header: "Cầu thủ",
        accessorKey: "player.name",
      },
      {
        header: "Cơ hội lớn tạo ra",
        accessorKey: "bigChancesCreated",
      },
      {
        header: "Kiến tạo",
        accessorKey: "assists",
      },
      {
        header: "Số đường chuyền chính xác",
        accessorKey: "accuratePasses",
      },
      {
        header: "Tỉ lệ chuyền bóng chính xác",
        accessorKey: "accuratePassesPercentage",
      },
      {
        header: "Số đường chuyền quyết định",
        accessorKey: "keyPasses",
      },
      {
        header: "Điểm số",
        accessorKey: "rating",
      },
    ],
  },
  {
    id: 4,
    name: "Goalkeeper",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
      },
      {
        header: "Cầu thủ",
        accessorKey: "player.name",
      },
      {
        header: "Giữ sạch lưới",
        accessorKey: "cleanSheet",
      },
      {
        header: "Cản phá Penalty",
        accessorKey: "penaltySave",
      },
      {
        header: "Tình huống cứu thua trong box",
        accessorKey: "savedShotsFromInsideTheBox",
      },
      {
        header: "Ra khỏi vị trí",
        accessorKey: "runsOut",
      },
    ],
  },
];

export default columns;
