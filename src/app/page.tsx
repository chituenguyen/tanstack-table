"use client";
import React, { useState } from "react";

import useTournamentStatistics from "./hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import columns from "../app/const/Group";
import { PaginationItem } from "@mui/material";

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
    <div className="p-6  containerPage">
      <div className="w-[889px] px-[50px] p-6 flex flex-col gap-14px">
        <h1 className="text-basic text-sm font-bold not-italic uppercase">
          Thông số cầu thủ
        </h1>
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
        <table className="">
          <thead>
            <tr className="">
              {selectedColumns.map((column, id) => (
                <th
                  key={id}
                  className={`text-basic text-12px font-bold not-italic leading-4 px-4 py-2 hover:cursor-pointer border-y-[1px] bofder-[#CDDDED] ${
                    id == 1 ? "text-start px-0" : ""
                  }`}
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
                <tr key={id} className={`text-center`}>
                  {selectedColumns.map((column) => {
                    const accessorKeys = column.accessorKey.split("."); // Split the accessorKey by '.' to access nested properties
                    let cellData = row;
                    accessorKeys.forEach((key) => {
                      if (cellData) {
                        cellData = cellData[key];
                      }
                    });
                    console.log(column);
                    return (
                      <td
                        key={column.accessorKey}
                        className={`${
                          column.accessorKey === "player.name"
                            ? "text-start"
                            : ""
                        } ${
                          column.accessorKey === "rating"
                            ? "text-rega-blue !font-bold"
                            : ""
                        } text-basic text-12px font-normal py-2 leading-14px border-b-[1px] border-[#CDDDED] `}
                      >
                        {column.accessorKey === "player.id" ? id + 1 : cellData}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <Stack spacing={2} className="mt-3">
          <Pagination
            count={apiResponse?.data.pages}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#2187E5",
                    color: "white",
                  },
                }}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default IndexPage;
