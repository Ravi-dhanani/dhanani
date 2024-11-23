import Input from "@/common/Inpute";

export default function Page() {
  return (
    <div className="">
      <h1 className="mb-3 block text-2xl font-bold text-black dark:text-white">
        Add Seller
      </h1>
      <div className="flex flex-col gap-5.5 pt-4">
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Name
          </label>
          <Input type="text" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Mobile No.
          </label>
          <Input type="tel" />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Email
          </label>
          <Input type="email" />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Address
          </label>
          <Input type="text" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Adhar Card No.
          </label>
          <Input type="number" />
        </div>
        <div className="flex justify-end gap-3">
          <button className="r inline-flex items-center justify-center rounded-md border bg-transparent bg-white px-5 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10">
            Cancel
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
