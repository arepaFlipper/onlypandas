import BaseLayout from "@/components/BaseLayout";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import { admin } from "@/dummy_data";

const HomeScreen = () => {
  return (
    <div>
      <LogoutLink>Logout</LogoutLink>
      <BaseLayout renderRightPanel={false} >
        <UserProfile />
        <Posts isSubscribed admin={admin} />
      </BaseLayout>
    </div>
  )
};

export default HomeScreen;
