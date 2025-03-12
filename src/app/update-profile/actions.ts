"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getUserProfileAction() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;
  console.log(`🐯%cactions.ts:13 - user`, 'font-weight:bold; background:#40bf00;color:#fff;'); //DELETEME:
  console.log(user); // DELETEME:

  const currentUser = await prisma.user.findUnique({ where: { id: user.id } });
  console.log(`👯%cactions.ts:17 - currentUser`, 'font-weight:bold; background:#4fb000;color:#fff;'); //DELETEME:
  console.log(currentUser); // DELETEME:
  return currentUser;
}

export async function updateUserProfileAction({ name, image }: { name: string; image: string }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const updatedFields: Partial<User> = {};

  if (name) updatedFields.name = name;
  if (image) updatedFields.image = image;

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: updatedFields,
  });

  revalidatePath("/update-profile");

  return { success: true, user: updatedUser };
}
