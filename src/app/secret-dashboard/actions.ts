"use server";

import { centsToDollars } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type PostArgs = {
  text: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  isPublic: boolean;
};

export async function createPostAction({ isPublic, mediaUrl, mediaType, text }: PostArgs) {

  return { success: true, post: { text, mediaUrl, mediaType, isPublic } };
}

export async function getAllProductsAction() {

  return { success: true, products: [] };
}

type ProductArgs = {
  name: string;
  image: string;
  price: string;
};

export async function addNewProductToStoreAction({ name, image, price }: ProductArgs) {
  return { success: true, product: { name, image, price } };
}

export async function toggleProductArchiveAction(productId: string) {

  return { success: true, product: { id: productId } };
}

export async function getDashboardData() {
  const totalRevenuePromise = Promise.all([]);

  const totalSalesPromise = []
  const totalSubscriptionsPromise = []

  const recentSalesPromise = []

  const recentSubscriptionsPromise = []

  // run all promises in parallel so that they don't block each other
  const [totalRevenueResult, totalSales, totalSubscriptions, recentSales, recentSubscriptions] = await Promise.all([
    totalRevenuePromise,
    totalSalesPromise,
    totalSubscriptionsPromise,
    recentSalesPromise,
    recentSubscriptionsPromise,
  ]);

  const totalRevenue = (totalRevenueResult[0]._sum.price || 0) + (totalRevenueResult[1]._sum.price || 0);

  return {
    totalRevenue: centsToDollars(totalRevenue),
    totalSales,
    totalSubscriptions,
    recentSales,
    recentSubscriptions,
  };
}

async function checkIfAdmin() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  if (!user || !isAdmin) return false;

  return user;
}
