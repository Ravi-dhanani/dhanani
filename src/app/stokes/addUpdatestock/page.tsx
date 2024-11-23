"use client";
import Input from "@/common/Inpute";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1 className="mb-3 block text-2xl font-bold text-black dark:text-white">
        Add Stock
      </h1>
      <div className="flex flex-col gap-5.5 pt-4">
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Seller Name
          </label>
          <SelectGroupOne />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Stock Name
          </label>
          <Input type="text" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Total Stock
          </label>
          <Input type="number" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Given Stock
          </label>
          <Input type="number" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Per Stock Price
          </label>
          <Input type="number" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Date
          </label>
          <Input type="date" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Stock Given Date
          </label>
          <Input type="date" />
        </div>
        <div className="flex justify-end gap-4.5">
          <button
            className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            onClick={() => router.push("/stokes")}
          >
            Cancel
          </button>
          <button
            className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
