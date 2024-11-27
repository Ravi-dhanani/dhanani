"use client";
import ApiServices from "@/components/services/Apiservices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import AddUpdateMerchant from "../../addUpdatemerchant/AddUpdateMerchant";

export default function Page() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => await ApiServices.getMerchant(id.toString()),
  });
  return (
    <div>
      <AddUpdateMerchant
        headingName="Update Seller"
        objMerchant={data}
        id={id.toString()}
      />
    </div>
  );
}
