"use client";
import React, { useState } from "react";

import useTournamentStatistics from "./hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import columns from "../app/const/Group";
import Acumalation from "../app/const/Acumulation";
import minAppOptions from "../app/const/minApp";
import { PaginationItem } from "@mui/material";

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState("-goals");
  const [group, setGroup] = useState("Summary");
  const [minApps, setMinApps] = useState(minAppOptions[0].value);
  const [accumulation, setAccumulation] = useState(Acumalation[0].value);
  const [showAccumulationOptions, setShowAccumulationOptions] = useState(false);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };
  const {
    data: apiResponse,
    isLoading,
    error,
  } = useTournamentStatistics(
    page,
    sorted,
    group.toLowerCase(),
    minApps,
    accumulation
  ); // Use the custom hook
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
    setShowAccumulationOptions(false);
  };
  const handleGroupClick = (name: string) => {
    setGroup(name);
    setShowAccumulationOptions(false);
    setPage(1);
    columns.map((item) => {
      if (item.name === name) {
        setSorted("-" + columns[item.id].data[2].accessorKey);
      }
    });
  };
  const handleChangeAccumulator = (value: string) => {
    setAccumulation(value);
    setShowAccumulationOptions(false);
    setPage(1);
  };
  const handleChangeMinApps = (value: string) => {
    setMinApps(value);
    setShowAccumulationOptions(false);
    setPage(1);
  };
  const selectedColumns = columns.find((column) => column.name === group)!.data;
  return (
    <div className="p-6  containerPage">
      <div className="w-[889px] py-4 flex flex-col gap-14px shadow-custom rounded-2xl">
        <h1 className="text-basic text-sm font-bold not-italic uppercase">
          Player Statistics
        </h1>
        <div className="flex items-center pb-14px border-b-[1px] birder-[#cdded]">
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
        {/* radio input and selected button  */}
        <div className="flex justify-between">
          {/* SummaryMin  */}
          <form className="text-[13px] not-italic font-normal leading-4 flex gap-5">
            {minAppOptions.map((item) => (
              <div key={item.value} className="flex gap-2 items-center">
                <input
                  type="radio"
                  value={item.value}
                  name="minApps"
                  checked={minApps === item.value}
                  onChange={() => handleChangeMinApps(item.value)}
                />
                <label>{item.label}</label>
              </div>
            ))}
          </form>
          {/* accumulation */}
          <div className="flex items-center text-[13px] font-normal leading-4 gap-14px relative">
            <p>Accumulation</p>
            <button
              className="flex items-center w-[200px] justify-between border-[1px] border-solid px-[10px] py-2"
              onClick={() =>
                setShowAccumulationOptions(!showAccumulationOptions)
              }
            >
              {Acumalation.find((item) => item.value === accumulation)?.label}{" "}
              {!showAccumulationOptions ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                >
                  <path
                    d="M7.525 0L8 0.546875L4 5L0 0.546875L0.475 0L4 3.90625L7.525 0Z"
                    fill="#01B243"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M7.525 0L8 0.546875L4 5L0 0.546875L0.475 0L4 3.90625L7.525 0Z"
                    fill="#01B243"
                  />
                </svg>
              )}
            </button>
            <ul
              className={`absolute right-0 w-[200px] top-[110%] bg-white z-10 ${
                showAccumulationOptions ? "block" : "hidden"
              } py-2 rounded-md`}
            >
              {Acumalation.map((item) => (
                <li
                  className={`p-2 ${
                    accumulation === item.value
                      ? "text-rega-blue bg-surface-1"
                      : ""
                  } hover:cursor-pointer`}
                  onClick={() => handleChangeAccumulator(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* table  */}
        <table className="">
          <thead>
            <tr className="bg1">
              {selectedColumns.map((column, id) => (
                <th
                  key={id}
                  className={`text-basic text-12px font-bold not-italic leading-4 px-4 py-2 hover:cursor-pointer border-y-[1px] bofder-[#CDDDED]  ${
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
                <tr
                  key={id}
                  className={`text-center ${id % 2 === 1 ? "bg1" : ""}`}
                >
                  {selectedColumns.map((column) => {
                    const accessorKeys = column.accessorKey.split("."); // Split the accessorKey by '.' to access nested properties
                    let cellData = row;
                    accessorKeys.forEach((key) => {
                      if (cellData) {
                        cellData = cellData[key];
                      }
                    });
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
        {/* pagination  */}
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
