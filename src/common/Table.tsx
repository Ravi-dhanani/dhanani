import React from "react";

interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <div className="">
      <div className="overflow-x-auto rounded-lg border border-stroke bg-white px-0 pb-2.5 pt-2 shadow-default xl:pb-1 ">
        <table className="w-full table-auto rounded-xl">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-4 py-4 font-medium text-black dark:text-white ${
                    column.className || ""
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => {
                  const content: React.ReactNode =
                    typeof column.accessor === "function"
                      ? column.accessor(row)
                      : (row[column.accessor] as React.ReactNode);

                  return (
                    <td
                      key={colIndex}
                      className="border-b border-[#eee] px-4 py-4 dark:border-strokedark"
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
