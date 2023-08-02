// TableRow.tsx
import React from "react";

type Column = {
  accessorKey: string;
};

type Props = {
  index: number;
  row: any;
  columns: Column[];
};

const TableRow: React.FC<Props> = ({ index, row, columns }) => {
  return (
    <tr
      key={index}
      className={`text-center ${index % 2 === 1 ? "bg-surface-1" : ""}`}
    >
      {columns.map((column) => {
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
              column.accessorKey === "player.name" ? "text-start" : ""
            } ${
              column.accessorKey === "rating"
                ? cellData >= 9
                  ? "text-[#3498DB]"
                  : cellData >= 8
                  ? "text-[#47C152]"
                  : cellData >= 7
                  ? "text-[#A2B719]"
                  : cellData >= 6
                  ? "text-[#D8B62A]"
                  : "text-[#FA5151]"
                : ""
            } text-basic text-xs font-normal py-2 leading-smc border-b border-[#CDDDED]`}
          >
            {column.accessorKey === "player.id" ? index + 1 : cellData}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
