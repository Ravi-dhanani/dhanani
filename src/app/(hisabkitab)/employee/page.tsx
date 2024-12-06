"use client";
import { Icons } from "@/common/icons";
import SearchInput from "@/common/SearchInput";
import { employeeList } from "@/components/services/employee.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export interface IWorkHistory {
  date: string;
  employeeId: string;
  itemName: string;
  itemPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface IEmployee {
  _id: string;
  name: string;
  address: string;
  mobile: string;
  workHistory: IWorkHistory[];
}

export default function Employee() {
  const router = useRouter();
  const [searchEmployee, setSearchEmployee] = useState("");
  const { data } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => await employeeList(),
  });
  const lstEmployee = data?.data?.employees;

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <SearchInput
          onchange={(value) => {
            setSearchEmployee(value);
          }}
          value={searchEmployee}
        />
        <button
          onClick={() => router.push(`/employee/create`)}
          className="inline-flex w-auto items-center justify-center gap-2.5 rounded-md bg-primary px-4 py-[9px] text-center font-medium text-white hover:bg-opacity-90"
        >
          + Add worker
        </button>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {lstEmployee?.map((customer: IEmployee, index: number) => {
          const totalWorkHistoryPrice = customer.workHistory.reduce(
            (acc, work) => acc + (work.totalPrice || 0),
            0,
          );

          return (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={"/images/user/user.jpg"}
                    alt={`${customer.name} image`}
                    width={32}
                    height={32}
                    className="h-10 w-10 rounded-full border"
                  />
                </div>
                <div className="ms-4 min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {customer.name}
                  </p>

                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {customer.mobile}
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="inline-flex items-center text-base font-semibold text-green-700 dark:text-white">
                    ₹{totalWorkHistoryPrice}
                  </div>
                  <div className="flex gap-x-1">
                    <Icons.editIcon
                      className="w-5 cursor-pointer"
                      onClick={() =>
                        router.push(`/employee/edit/${customer._id}`)
                      }
                    />
                    {/* <Icons.deleteIcon className="w-5 cursor-pointer" /> */}
                    <Icons.viewIcon
                      className="w-5 cursor-pointer"
                      onClick={() => router.push(`/employee/${customer._id}`)}
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
