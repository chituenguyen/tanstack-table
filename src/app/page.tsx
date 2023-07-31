"use client";
import React, { useState } from "react";

import useTournamentStatistics from "./hooks/useFetch";
import useTournamentStatisticsDetail from "./hooks/useFetchDetail";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import columns from "./const/Group";
import Acumalation from "./const/Acumulation";
import minAppOptions from "./const/minApp";
import { Box, CircularProgress, PaginationItem } from "@mui/material";
import groupType from "./const/groupTypeDetail";
import Tab from "./components/Tab";
import { FormProvider, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

interface InitialData {
  data: Array<{
    header: string;
    accessorKey: string;
    sorted: boolean;
  }>;
}
const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState("-goals");
  const [group, setGroup] = useState("Detailed");
  const [minApps, setMinApps] = useState(minAppOptions[0].value);
  const [accumulation, setAccumulation] = useState(Acumalation[0].value);
  const [showAccumulationOptions, setShowAccumulationOptions] = useState(false);
  const selectedColumns = columns.find((column) => column.name === group)!.data;
  const [fields, setFields] = useState<String>(
    selectedColumns.map((item: any) => item.accessorKey).join(",")
  );
  const [initialData, setInitialData] = useState<InitialData>({
    data: columns[columns.length - 1].data, // Your initial data here
  });

  const methods = useForm();
  const queryClient = useQueryClient();
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
  const {
    data: apiResponseDetail,
    isLoading: loadingDetail,
    error: errorDetail,
  } = useTournamentStatisticsDetail(page, fields);
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

  const handleInitialDataChange = (newData: InitialData) => {
    setInitialData(newData);
  };
  const [columnDetail, setColumnDetail] = useState(initialData)

  const onSubmit = (data: any) => {
    const selected = Object.keys(data).filter((key) => data[key] !== false);
    setFields(selected.join(","));
    setColumnDetail(initialData)
    // Call the refetch function to trigger data refetch
    queryClient.refetchQueries("tournamentStatisticsDetail");
  };

  return (
    <div className="p-6  containerPage font-beVietNam">
      <div className="w-[889px] py-4 flex flex-col gap-3.5 shadow-custom rounded-2xl min-h-[700px]">
        <h1 className="text-basic text-sm font-bold not-italic uppercase">
          Player Statistics
        </h1>
        <div className="flex items-center pb-3.5 border-b birder-[#cdded]">
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
        {group === "Detailed" ? null : (
          <div className="flex justify-between">
            {/* SummaryMin  */}
            <form className="text-xsm not-italic font-normal leading-4 flex gap-5">
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
            <div className="flex items-center text-xsm font-normal leading-4 gap-3.5 relative">
              <p>Accumulation</p>
              <button
                className="flex items-center w-[200px] justify-between border border-solid px-[10px] py-2"
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
        )}
        {group === "Detailed" ? (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Tab
                tabs={groupType}
                initialData={initialData}
                onInitialDataChange={handleInitialDataChange}
              />
              <button type="submit">Apply</button>
            </form>
          </FormProvider>
        ) : null}

        {isLoading || loadingDetail ? (
          <Box className="w-full h-full flex-1 flex justify-center items-center">
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* table  */}
            <table className="">
              <thead>
                <tr className="bg1">
                  {group === "Detailed"
                    ? columnDetail.data.map((column, id) => (
                        <th
                          key={id}
                          className={`text-basic text-xs font-bold not-italic leading-4 px-4 py-2 border-y bofder-[#CDDDED]  ${
                            id == 1 ? "text-start px-0" : ""
                          }
        sorted:true
                      `}
                        >
                          <p
                            className={`flex ${
                              column.accessorKey === "player.name"
                                ? ""
                                : "items-center"
                            } flex-col`}
                          >
                            <p>{column.header}</p>
                          </p>
                        </th>
                      ))
                    : selectedColumns.map((column, id) => (
                        <th
                          key={id}
                          className={`text-basic text-xs font-bold not-italic leading-4 px-4 py-2 border-y bofder-[#CDDDED]  ${
                            id == 1 ? "text-start px-0" : ""
                          }
        sorted:true
                      ${
                        column.sorted ? "hover:cursor-pointer" : "cursor-auto"
                      }`}
                          onClick={() => handleColumnClick(column.accessorKey)} // Pass the column header to the click handler
                        >
                          <p
                            className={`flex ${
                              column.accessorKey === "player.name"
                                ? ""
                                : "items-center"
                            } flex-col`}
                          >
                            <p>{column.header}</p>
                            {column.sorted ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className={`${
                                  column.accessorKey === sorted
                                    ? "rotate-180"
                                    : ""
                                }`}
                              >
                                <path
                                  fill={`${
                                    column.accessorKey === sorted ||
                                    "-" + column.accessorKey === sorted
                                      ? "#2187E5"
                                      : ""
                                  }`}
                                  d="M13 5H3l5 8z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            ) : (
                              ""
                            )}
                          </p>
                        </th>
                      ))}
                </tr>
              </thead>
              <tbody>
                {group === "Detailed"
                  ? apiResponseDetail?.data.results.map(
                      (row: any, id: number) => {
                        return (
                          <tr
                            key={id}
                            className={`text-center ${
                              id % 2 === 1 ? "bg1" : ""
                            }`}
                          >
                            {columnDetail.data.map((column) => {
                              const accessorKeys =
                                column.accessorKey.split("."); // Split the accessorKey by '.' to access nested properties
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
                                  } text-basic text-xs font-normal py-2 leading-smc border-b border-[#CDDDED] `}
                                >
                                  {column.accessorKey === "player.id"
                                    ? id + 1
                                    : cellData}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      }
                    )
                  : apiResponse?.data.results.map((row: any, id: number) => {
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
                                } text-basic text-xs font-normal py-2 leading-smc border-b border-[#CDDDED] `}
                              >
                                {column.accessorKey === "player.id"
                                  ? id + 1
                                  : cellData}
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
                count={
                  group === "Detailed"
                    ? apiResponseDetail?.data.pages
                    : apiResponse?.data.pages
                }
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
          </>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
