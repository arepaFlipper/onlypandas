"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export async function getUserProfileAction() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  return {};
}

export async function updateUserProfileAction({ name, image }: { name: string; image: string }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const updatedFields = {};

  if (name) updatedFields.name = name;
  if (image) updatedFields.image = image;


  revalidatePath("/update-profile");

  return { success: true, user };
}
