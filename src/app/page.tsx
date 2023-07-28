"use client";
import React, { useState } from "react";

import useTournamentStatistics from "./hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import columns from "../app/const/Group";

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState("-goals");
  const [group, setGroup] = useState("Summary");
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
    setPage(1);
    columns.map((item) => {
      if (item.name === name) {
        setSorted("-" + columns[item.id].data[2].accessorKey);
      }
    });
  };
  const selectedColumns = columns.find((column) => column.name === group)!.data;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Player stats</h1>
      <div className="flex items-center">
        {columns.map((item) => (
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
