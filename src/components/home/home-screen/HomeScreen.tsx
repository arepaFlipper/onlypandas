"use client"
import BaseLayout from "@/components/BaseLayout";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import UserProfile from "./UserProfile";

const HomeScreen = () => {
  return (
    <div>
      <LogoutLink>Logout</LogoutLink>
      <BaseLayout renderRightPanel={false} >
        <UserProfile />
      </BaseLayout>
    </div>
  )
};

export default HomeScreen;
