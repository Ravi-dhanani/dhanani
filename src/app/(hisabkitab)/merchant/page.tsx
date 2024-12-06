"use client";
import { Icons } from "@/common/icons";
import SearchInput from "@/common/SearchInput";
import Table from "@/common/Table";
import { Toast } from "@/common/Toast";
import {
  deleteMerchant,
  merchantList,
} from "@/components/services/merchants.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export interface IMerchant {
  _id: string;
  name: string;
  mobile: string;
  address: string;
  adharCard: string;
  photos: string;
  admin: string;
}
export default function Merchant() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["merchantlist"],
    queryFn: async () => await merchantList(),
  });
  const columns = [
    {
      header: "Name",
      accessor: (row: any) => (
        <h5 className="font-medium text-black dark:text-white">{row.name}</h5>
      ),
      className: "min-w-[220px]",
    },
    {
      header: "Mobile No.",
      accessor: "mobile",
      className: "min-w-[150px]",
    },
    {
      header: "Address",
      accessor: (row: any) => (
        <h5 className="font-medium text-black dark:text-white">
          {row.address}
        </h5>
      ),
      className: "min-w-[220px]",
    },
    {
      header: "Actions",
      accessor: (row: any) => (
        <div className="flex items-center space-x-3.5">
          <button
            className="hover:text-primary"
            onClick={() => {
              router.push(`/merchant/edit/${row._id}`);
            }}
          >
            <Icons.editIcon />
          </button>
          <button
            className="hover:text-primary"
            onClick={async () => {
              try {
                Swal.fire({
                  title: "Are you sure For Delete?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    await deleteMerchant(row._id);
                    Toast.show("Merchant deleted successfully", "success");
                    Swal.fire({
                      title: "Deleted!",
                      text: "Merchant deleted successfully",
                      icon: "success",
                    });
                  }
                });

                refetch();
              } catch (e) {
                Toast.show("Something went wrong. Please try again", "error");
              }
            }}
          >
            <Icons.deleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <SearchInput
          onchange={(value) => {
            setSearchTerm(value);
          }}
          value={searchTerm}
        />
        <button
          onClick={() => router.push("/merchant/addUpdatemerchant")}
          className="inline-flex w-auto items-center justify-center gap-2.5 rounded-md bg-primary px-4 py-[9px] text-center font-medium text-white hover:bg-opacity-90"
        >
          + Add Seller
        </button>
      </div>

      <Table
        data={data?.data || []}
        columns={columns as any}
        isLoading={isFetching}
        isPending={isLoading}
        isFetching={isFetching}
        skeletonRowCount={data?.data?.length}
      />
    </div>
  );
}
