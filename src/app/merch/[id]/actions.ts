"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createCheckoutSessionAction({ productId, size }: { productId: string; size: string }) {

  return { url: "/checkout" };
}
