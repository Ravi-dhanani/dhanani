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
    // <div className="max-w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
    //   <div className="overflow-x-auto">
    //     <table className="w-full table-auto">
    //       <thead>
    //         <tr className="bg-gray-2 text-left dark:bg-meta-4">
    //           {columns.map((column, index) => (
    //             <th
    //               key={index}
    //               className={`px-4 py-4 font-medium text-black dark:text-white ${
    //                 column.className || ""
    //               }`}
    //             >
    //               {column.header}
    //             </th>
    //           ))}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((row, rowIndex) => (
    //           <tr key={rowIndex}>
    //             {columns.map((column, colIndex) => {
    //               // Resolve the accessor to get the content for the cell
    //               const content: React.ReactNode =
    //                 typeof column.accessor === "function"
    //                   ? column.accessor(row) // Use custom renderer
    //                   : (row[column.accessor] as React.ReactNode); // Cast to ReactNode

    //               return (
    //                 <td
    //                   key={colIndex}
    //                   className="border-b border-[#eee] px-4 py-5 dark:border-strokedark"
    //                 >
    //                   {content}
    //                 </td>
    //               );
    //             })}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="w-22">
      <div className="max-w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
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
                    // Resolve the accessor to get the content for the cell
                    const content: React.ReactNode =
                      typeof column.accessor === "function"
                        ? column.accessor(row) // Use custom renderer
                        : (row[column.accessor] as React.ReactNode); // Cast to ReactNode

                    return (
                      <td
                        key={colIndex}
                        className="border-b border-[#eee] px-4 py-5 dark:border-strokedark"
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
    </div>
  );
};

export default Table;
