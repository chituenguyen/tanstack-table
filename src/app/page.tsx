"use client"
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Mock data
const mockData = [
  // Your data here...
  {
    "id": 1,
    "name": "Swades: We, the People (Our Country)",
    "genre": "Drama",
    "rating": 4.0
  },
  {
    "id": 2,
    "name": "Horns",
    "genre": "Horror|Mystery",
    "rating": 2.8
  },
  {
    "id": 3,
    "name": "Pyaar Impossible",
    "genre": "Comedy|Romance",
    "rating": 7.3
  },
  {
    "id": 4,
    "name": "Dark City",
    "genre": "Crime|Drama|Film-Noir|Mystery",
    "rating": 5.9
  },
  {
    "id": 5,
    "name": "Skin Game, The",
    "genre": "Drama",
    "rating": 5.9
  },
];

const columns = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Genre",
    accessorKey: "genre",
  },
  {
    header: "Rating",
    accessorKey: "rating",
  },
];

const IndexPage = () => {

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups())
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Simple Table Example</h1>
      <table className="">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexPage;
