"use server";

export async function createCheckoutSessionAction({ productId, size }: { productId: string; size: string }) {
  return { url: `/merch/${productId}` };
}
