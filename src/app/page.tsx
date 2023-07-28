"use client";
import React, { useState } from "react";

import useTournamentStatistics from "./hooks/useFetch";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const columns = [
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
    header: "Rê bóng thành công",
    accessorKey: "successfulDribbles",
  },
  {
    header: "Tắc bóng",
    accessorKey: "bigChancesMissed",
  },
  {
    header: "Kiến tạo",
    accessorKey: "assists", // Replace 'assists' with the correct key for assists if available in your data.
  },
  {
    header: "Tỉ lệ chuyền bóng thành công",
    accessorKey: "passCompletionPercentage", // Replace 'passCompletionPercentage' with the correct key for pass completion percentage if available in your data.
  },
  {
    header: "Điểm số",
    accessorKey: "rating",
  },
];

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState("-goals");
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const {
    data: apiResponse,
    isLoading,
    error,
  } = useTournamentStatistics(page, sorted); // Use the custom hook
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const handleColumnClick = (header: string) => {
    if (header === "goals") {
      if (sorted === "-goals") {
        setSorted("goals");
      } else {
        setSorted("-goals");
      }
    } else if (header === "rating") {
      if (sorted === "-rating") {
        setSorted("rating");
      } else {
        setSorted("-rating");
      }
    }
    else if(header === "successfulDribbles"){
      if (sorted === "-successfulDribbles") {
        setSorted("successfulDribbles");
      } else {
        setSorted("-successfulDribbles");
      }
    }
    else if (header === "bigChancesMissed"){
      if(sorted === "-bigChancesMissed"){
        setSorted("bigChancesMissed")
      }
      else{
        setSorted("-bigChancesMissed")
      }
    }
    setPage(1);
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Simple Table Example</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, id) => (
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
                {columns.map((column) => {
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
