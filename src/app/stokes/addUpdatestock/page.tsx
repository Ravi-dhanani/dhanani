"use client";
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
          <input
            type="text"
            className="w-full rounded border border-stroke px-3 py-2"
            placeholder="Enter seller name"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Stock Name
          </label>
          <input
            type="text"
            className="w-full rounded border border-stroke px-3 py-2"
            placeholder="Enter stock name"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Total Stock
          </label>
          <input
            type="number"
            className="w-full rounded border border-stroke px-3 py-2"
            placeholder="Enter total stock"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Given Stock
          </label>
          <input
            type="number"
            className="w-full rounded border border-stroke px-3 py-2"
            placeholder="Enter given stock"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Per Stock Price
          </label>
          <input
            type="number"
            className="w-full rounded border border-stroke px-3 py-2"
            placeholder="Enter price per stock"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Date
          </label>
          <input
            type="date"
            className="w-full rounded border border-stroke px-3 py-2"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Stock Given Date
          </label>
          <input
            type="date"
            className="w-full rounded border border-stroke px-3 py-2"
          />
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
