"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createCheckoutSessionAction({ productId, size }: { productId: string; size: string }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized - you must be logged in to purchase products");

  const product = await prisma.product.findUnique({ where: { id: productId } });

  if (!product) throw new Error("Product of size " + size + " not found");

  return { url: `/merch/${product.id}` };
}
