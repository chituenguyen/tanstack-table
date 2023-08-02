// HeaderRow.tsx
import React from "react";

type Column = {
  accessorKey: string;
  header: string;
  sorted: boolean;
};

type Props = {
  group: string;
  columnDetail: any;
  selectedColumns: Column[];
  sorted: string;
  handleColumnClick: (accessorKey: string) => void;
};

const HeaderRow: React.FC<Props> = ({
  group,
  columnDetail,
  selectedColumns,
  sorted,
  handleColumnClick,
}) => {
  return (
    <tr className="bg-surface-1">
      {group === "Detailed" ? (
        columnDetail.data.map((column: Column, id: number) => (
          <th
            key={id}
            className={`text-basic text-xs font-bold not-italic leading-4 px-4 py-2 border-y border-[#CDDDED] ${
              id === 1 ? "text-start px-0" : ""
            }`}
          >
            <p
              className={`flex ${
                column.accessorKey === "player.name" ? "" : "items-center"
              } flex-col`}
            >
              <p>{column.header}</p>
            </p>
          </th>
        ))
      ) : (
        selectedColumns.map((column: Column, id: number) => (
          <th
            key={id}
            className={`text-basic text-xs font-bold not-italic leading-4 px-4 py-2 border-y border-[#CDDDED] ${
              id === 1 ? "text-start px-0" : ""
            } sorted:${column.sorted ? "true" : "false"} ${
              column.sorted ? "hover:cursor-pointer" : "cursor-auto"
            }`}
            onClick={() => handleColumnClick(column.accessorKey)}
          >
            <p
              className={`flex ${
                column.accessorKey === "player.name" ? "" : "items-center"
              } flex-col`}
            >
              <p>{column.header}</p>
              {column.sorted ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className={`${column.accessorKey === sorted ? "rotate-180" : ""
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
        ))
      )}
    </tr>
  );
};

export default HeaderRow;
