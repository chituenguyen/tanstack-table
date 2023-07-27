"use client"
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import useTournamentStatistics from './hooks/useFetch'

// Mock data
const fetchUsers = ({ pageParam = 0 }) => {
  return axios.get(
    `https://apisf.p2pcdn.xyz/api/v1/unique-tournament/17/season/41886/statistics?limit=20&order=-goals&accumulation=total&group=attack&offset=${20*pageParam}`
  );
};
const mockData = [
  // Your data here...
  {
    "goals": 36,
    "expectedGoals": 28.66,
    "bigChancesMissed": 28,
    "successfulDribbles": 11,
    "totalShots": 123,
    "goalConversionPercentage": 29.27,
    "rating": 7.36,
    "player": {
      "name": "Erling Haaland",
      "slug": "erling-haaland",
      "userCount": 253103,
      "id": 839956
    },
    "team": {
      "name": "Manchester City",
      "slug": "manchester-city",
      "shortName": "Manchester City",
      "userCount": 0,
      "type": 0,
      "id": 17,
      "teamColors": {
        "primary": "#52b030",
        "secondary": "#52b030",
        "text": "#ffffff"
      }
    }
  }
];

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
  const { data, isLoading, error } = useTournamentStatistics(); // Use the custom hook

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const tableData = data?.data ?? [];
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups())
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Simple Table Example</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border px-4 py-2"
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getCoreRowModel().rows.map((row) => (
            <tr key={row.id} className="border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-4 py-2 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexPage;
