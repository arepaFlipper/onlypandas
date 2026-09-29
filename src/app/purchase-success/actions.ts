"use server";

import { products } from "@/dummy_data/index";

export async function checkProductPaidStatus(orderId: string) {
  if (!orderId) return false;

  return {
    product: products[0],
    isPaid: true,
    size: "md",
    shippingAddress: {
      address: "123 Demo Street",
      city: "San Francisco",
      state: "CA",
      postalCode: "94102",
      country: "US",
    },
  };
}
