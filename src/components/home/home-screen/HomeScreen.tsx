"use client"
import BaseLayout from "@/components/BaseLayout";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const HomeScreen = () => {
  return (
    <div>
      <LogoutLink>Logout</LogoutLink>
      <BaseLayout>Home screen content</BaseLayout>
    </div>
  )
};

export default HomeScreen;
