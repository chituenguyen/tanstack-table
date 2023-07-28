"use client";
import React, { useState } from "react";

import useTournamentStatistics from "./hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const columnsSummary = [
  {
    header: "ID",
    accessorKey: "player.id",
  },
  {
    header: "Cầu thủ",
    accessorKey: "player.name", // Access the player's name
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
    accessorKey: "assists", // Replace 'assists' with the correct key for assists if available in your data.
  },
  {
    header: "Tỉ lệ chuyền bóng thành công",
    accessorKey: "accuratePassesPercentage", // Replace 'accuratePassesPercentage' with the correct key for pass completion percentage if available in your data.
  },
  {
    header: "Điểm số",
    accessorKey: "rating",
  },
];

const columnsAttack = [
  {
    header: "ID",
    accessorKey: "player.id",
  },
  {
    header: "Cầu thủ",
    accessorKey: "player.name", // Access the player's name
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
    accessorKey: "goalConversionPercentage", // Replace 'accuratePassesPercentage' with the correct key for pass completion percentage if available in your data.
  },
  {
    header: "Điểm số",
    accessorKey: "rating",
  },
];
const columnsDefence = [
  {
    header: "ID",
    accessorKey: "player.id",
  },
  {
    header: "Cầu thủ",
    accessorKey: "player.name", // Access the player's name
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
];
const columnsPassing = [
  {
    header: "ID",
    accessorKey: "player.id",
  },
  {
    header: "Cầu thủ",
    accessorKey: "player.name", // Access the player's name
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
];
const columnsGoalKeeper = [
  {
    header: "ID",
    accessorKey: "player.id",
  },
  {
    header: "Cầu thủ",
    accessorKey: "player.name", // Access the player's name
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
];
const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState("-goals");
  const [group, setGroup] = useState("Summary");
  const groupHeader = [
    { id: 1, name: "Summary" },
    { id: 2, name: "Attack" },
    { id: 3, name: "Defence" },
    { id: 4, name: "Passing" },
    { id: 5, name: "Goalkeeper" },
  ];
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };
  const {
    data: apiResponse,
    isLoading,
    error,
  } = useTournamentStatistics(page, sorted, group.toLowerCase()); // Use the custom hook
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const handleColumnClick = (header: string) => {
    if (sorted === "-" + header) {
      setSorted(header);
    } else {
      setSorted("-" + header);
    }
    setPage(1);
  };
  const handleGroupClick = (name: string) => {
    setGroup(name);
  };
  const selectedColumns =
    group === "Summary"
      ? columnsSummary
      : group === "Attack"
      ? columnsAttack
      : group === "Defence"
      ? columnsDefence
      : group === "Passing"
      ? columnsPassing
      : columnsGoalKeeper;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Player stats</h1>
      <div className="flex items-center">
        {groupHeader.map((item) => (
          <button
            key={item.id}
            className={group === item.name ? "button-active" : "button"}
            onClick={() => handleGroupClick(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {selectedColumns.map((column, id) => (
              <th
                key={id}
                className="border px-4 py-2 hover:cursor-pointer"
                onClick={() => handleColumnClick(column.accessorKey)} // Pass the column header to the click handler
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {apiResponse?.data.results.map((row: any, id: number) => {
            return (
              <tr key={id} className="text-center">
                {selectedColumns.map((column) => {
                  const accessorKeys = column.accessorKey.split("."); // Split the accessorKey by '.' to access nested properties
                  let cellData = row;
                  accessorKeys.forEach((key) => {
                    if (cellData) {
                      cellData = cellData[key];
                    }
                  });
                  return <td key={column.accessorKey}>{cellData}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Stack spacing={2}>
        <Pagination
          count={apiResponse?.data.pages}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default IndexPage;
