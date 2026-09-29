"use server";

import { products as dummyProducts } from "@/dummy_data/index";
import { Product } from "@/lib/types";

type PostArgs = {
  text: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  isPublic: boolean;
};

export async function createPostAction({ isPublic, mediaUrl, mediaType, text }: PostArgs) {
  return {
    success: true,
    post: {
      id: `post-${Date.now()}`,
      text,
      mediaUrl: mediaUrl || null,
      mediaType: mediaType || null,
      isPublic,
      userId: "admin-1",
      likes: 0,
      createdAt: new Date(),
    },
  };
}

export async function getAllProductsAction(): Promise<Product[]> {
  return dummyProducts;
}

type ProductArgs = {
  name: string;
  image: string;
  price: string;
};

export async function addNewProductToStoreAction({ name, image, price }: ProductArgs) {
  if (!name || !image || !price) {
    throw new Error("Please provide all the required fields");
  }

  const priceInCents = Math.round(parseFloat(price) * 100);

  if (isNaN(priceInCents)) {
    throw new Error("Price must be a number");
  }

  return {
    success: true,
    product: {
      id: `product-${Date.now()}`,
      image,
      price: priceInCents,
      name,
      isArchived: false,
    },
  };
}

export async function toggleProductArchiveAction(productId: string) {
  return { success: true };
}

export async function getDashboardData() {
  return {
    totalRevenue: "1,234.56",
    totalSales: 42,
    totalSubscriptions: 18,
    recentSales: [] as any[],
    recentSubscriptions: [] as any[],
  };
}
