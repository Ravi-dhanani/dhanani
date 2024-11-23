import Input from "@/common/Inpute";
import React from "react";

export default function AddUpdateMerchant() {
  return (
    <div className="h-[350px] overflow-scroll">
      <div className="flex flex-col gap-5.5">
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
      </div>
    </div>
  );
}
