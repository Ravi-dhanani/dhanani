"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Input from "@/common/Inpute";
import { Toast } from "@/common/Toast";
import ApiServices from "@/components/services/Apiservices";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  address: yup.string().required("Address is required"),
  adharCard: yup
    .string()
    .matches(/^\d{12}$/, "Aadhar card number must be 12 digits")
    .required("Aadhar card number is required"),
});

interface IAddUpdateMerchantProps {
  headingName?: string;
  objMerchant?: any;
  id?: string;
}

export default function AddUpdateMerchant({
  objMerchant,
  id,
  headingName,
}: IAddUpdateMerchantProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      address: "",
      adharCard: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (objMerchant) {
      reset({
        name: objMerchant.name || "",
        mobile: objMerchant.mobile || "",
        address: objMerchant.address || "",
        adharCard: objMerchant.adharCard || "",
      });
    }
  }, [objMerchant, reset]);

  const onSubmit = async (data: any) => {
    try {
      if (id) {
        const res = await ApiServices.updateMerchant(id, data);
        if (res?.data) {
          Toast.show("Merchant updated successfully", "success");
          router.push("/merchant");
        } else {
          Toast.show(res?.error, "error");
        }
      } else {
        const res = await ApiServices.addmerchant(data);
        if (res?.data) {
          Toast.show("Merchant added successfully", "success");
          router.push("/merchant");
        } else {
          Toast.show(res?.error, "error");
        }
      }
    } catch (error) {
      Toast.show("Something went wrong. Please try again", "error");
    }
  };

  return (
    <div>
      <h1 className="mb-3 block text-2xl font-bold text-black dark:text-white">
        {headingName ? headingName : "Add Seller"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5.5 pt-4">
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Name
            </label>
            <Input type="text" {...register("name")} error={!!errors.name} />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Mobile No.
            </label>
            <Input type="tel" {...register("mobile")} error={!!errors.mobile} />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-500">
                {errors.mobile.message?.toString()}
              </p>
            )}
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Address
            </label>
            <Input
              type="text"
              {...register("address")}
              error={!!errors.address}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Aadhar Card No.
            </label>
            <Input
              type="number"
              {...register("adharCard")}
              error={!!errors.adharCard}
            />
            {errors.adharCard && (
              <p className="mt-1 text-sm text-red-500">
                {errors.adharCard.message?.toString()}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              type="button"
              onClick={() => router.push("/merchant")}
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
