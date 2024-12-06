"use client";
import { Icons } from "@/common/icons";
import SearchInput from "@/common/SearchInput";
import Table from "@/common/Table";
import { formatDate, formatToDate } from "@/common/utils";
import { getEmployeeWorks } from "@/components/services/employee.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IWorkHistory } from "../page";

export default function Page({ params }: { params: any }) {
  const [searchWork, setSearchWork] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();
  const { data, isFetching, isPending, isLoading } = useQuery({
    queryKey: ["merchantList"],
    queryFn: async () => await getEmployeeWorks(params.id.toString()),
  });
  const columns = [
    {
      header: "Design",
      accessor: (row: any) => (
        <h5 className="font-medium text-black dark:text-white">
          {row.itemName}
        </h5>
      ),
      className: "min-w-[100px]",
    },
    {
      header: "Date",
      accessor: (row: any) => (
        <h5 className=" text-black dark:text-white">{formatDate(row.date)}</h5>
      ),
      className: "min-w-[150px]",
    },
    {
      header: "Quantity",
      accessor: "quantity",
      className: "min-w-[100px]",
    },

    {
      header: "Rate",
      accessor: "itemPrice",
      className: "min-w-[100px]",
    },
    {
      header: "Total",
      accessor: (row: any) => (
        <h5 className="font-bold text-green-600 dark:text-white">
          ₹{row.totalPrice}
        </h5>
      ),
      className: "min-w-[100px]",
    },
    {
      header: "Actions",
      accessor: (row: any) => (
        <div className="flex items-center space-x-3.5">
          <Icons.editIcon
            className="w-5 cursor-pointer"
            onClick={() => router.push(`/employee/editWork/${row._id}`)}
          />
          <Icons.deleteIcon className="w-5 cursor-pointer" />
        </div>
      ),
    },
  ];

  const filterWorks = data?.data?.workHistory?.filter((work: IWorkHistory) => {
    const isWorkMatch = searchWork
      ? work.itemName.toLowerCase().includes(searchWork.toLowerCase())
      : true;

    const isDateMatch = selectedDate
      ? formatToDate(work.date) === selectedDate
      : true;

    return isWorkMatch && isDateMatch;
  });

  return (
    <div>
      <div className="mb-2">
        <div className="mb-2 flex justify-between">
          <SearchInput
            onchange={(value) => {
              setSearchWork(value);
            }}
            value={searchWork}
          />

          <button
            onClick={() => router.push(`/employee/work/${params.id}`)}
            className="inline-flex w-auto items-center justify-center gap-2.5 rounded-md bg-primary px-4 py-[9px] text-center font-medium text-white hover:bg-opacity-90"
          >
            + Add Work
          </button>
        </div>
        <div className="flex justify-end">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)} // Set the selected date
            className="rounded-md border px-4 py-2"
          />
        </div>
      </div>
      <Table
        data={filterWorks || []}
        columns={columns as any}
        isLoading={isLoading}
        isPending={isPending}
        isFetching={isFetching}
        skeletonRowCount={data?.data?.length}
      />
    </div>
  );
}
