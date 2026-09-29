"use server";

import { user as dummyUser } from "@/dummy_data/index";
import { revalidatePath } from "next/cache";

export async function getUserProfileAction() {
  return dummyUser;
}

export async function updateUserProfileAction({ name, image }: { name: string; image: string }) {
  revalidatePath("/update-profile");
  return {
    success: true,
    user: { ...dummyUser, name: name || dummyUser.name, image: image || dummyUser.image },
  };
}
