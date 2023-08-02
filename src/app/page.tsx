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
import Tab from "./components/Tab/Tab";
import { FormProvider, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import Position from "./components/Position/Position";
import TypeEQ from "./components/TypeEQ/TypeEQ";
import Accmulation from "./components/Accumulation/Accmulation";
import PreferredFoot from "./components/PreferredFoot/PreferredFoot";
import Appearances from "./components/Appearances/Appearances";
import Age from "./components/Age/Age";
import Team from "./components/Team/Team";
import Nationality from "./components/Nationality/Nationality";
import HeaderRow from "./components/HeaderTable/HeaderTable";
import TableRow from "./components/BodyTable/BodyTable";

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
  const [accumulationDetail, setAccumulationDetail] = useState(
    Acumalation[0].value
  );
  const [showAccumulationOptions, setShowAccumulationOptions] = useState(false);
  const selectedColumns = columns.find((column) => column.name === group)!.data;
  const [filter, setFilter] = useState("");
  const [fields, setFields] = useState<String>(
    selectedColumns.map((item: any) => item.accessorKey).join(",")
  );
  const [initialData, setInitialData] = useState<InitialData>({
    data: columns[columns.length - 1].data, // Your initial data here
  });

  const methods = useForm({
    defaultValues: {
      typeEQ: "",
    },
    shouldUnregister: false,
  });
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
  } = useTournamentStatisticsDetail(page, fields, filter, accumulationDetail);
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
  const [columnDetail, setColumnDetail] = useState(initialData);

  const onSubmit = (data: any) => {
    console.log(data);
    const selected = Object.keys(data).filter(
      (key) => data[key] == true || Array.isArray(data[key])
    );
    const positionSelected = Object.keys(data).filter(
      (key) => data[key] == "position"
    );
    const typeEQSelected = data["typeEQ"];
    const preferredFoot = data["preferredFoot"];
    const appearances = data["appearances"];
    const appearValue = data["appearValue"];
    const age = data["age"];
    const ageValue = data["ageValue"];
    const team = Object.keys(data).filter((key) => data[key] == "team");
    const nationality = Object.keys(data).filter(
      (key) => data[key] == "nationality"
    );
    const filterValue =
      (typeEQSelected.length > 0 ? "type.EQ." + typeEQSelected + "," : "") +
      (preferredFoot.length > 0
        ? "preferredFoot.EQ." + preferredFoot + ","
        : "") +
      (appearances.length > 0
        ? `appearances.${appearances}.${appearValue},`
        : "") +
      (age.length > 0 ? `age.${age}.${ageValue},` : "") +
      (team?.length > 0 ? `team.in.${team.join("~")},` : "") +
      (nationality?.length > 0
        ? `nationality.in.${nationality.join("~")},`
        : "") +
      "position.in." +
      positionSelected.join("~");
    setFields(selected.join(","));
    setFilter(filterValue);
    setColumnDetail(initialData);
    setAccumulationDetail(data["accumulation"]);
    // Call the refetch function to trigger data refetch
    queryClient.refetchQueries("tournamentStatisticsDetail");
  };

  return (
    <div className="p-6  containerPage font-beVietNam">
      <div className="w-[889px] py-4 px-2 flex flex-col gap-3.5 shadow-custom rounded-2xl min-h-[700px]">
        <h1 className="text-basic text-xsm font-bold not-italic text-center">
          Player Statistics
        </h1>
        <div className="flex items-center pb-3.5 border-b birder-[#cdded] gap-2">
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
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="text-xs flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <TypeEQ />
                <Appearances />
                <Accmulation />
              </div>
              <div className="flex justify-between">
                <Age />
                <Position />
                <PreferredFoot />
              </div>
              <div className="flex justify-between">
                <Nationality />
                <Team />
              </div>
              <Tab
                tabs={groupType}
                initialData={initialData}
                onInitialDataChange={handleInitialDataChange}
              />
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 text-xsm uppercase bg-[#374df5] text-white"
                >
                  Apply
                </button>
              </div>
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
              <HeaderRow
                group={group}
                columnDetail={columnDetail}
                selectedColumns={selectedColumns}
                sorted={sorted}
                handleColumnClick={handleColumnClick}
              />
              <tbody>
                {group === "Detailed"
                  ? apiResponseDetail?.data.results.map(
                      (row: any, id: number) => (
                        <TableRow
                          index={id}
                          row={row}
                          columns={columnDetail.data}
                        />
                      )
                    )
                  : apiResponse?.data.results.map((row: any, id: number) => (
                      <TableRow index={id} row={row} columns={selectedColumns} />
                    ))}
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
