import BaseLayout from "@/components/BaseLayout";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import { admin, user } from "@/dummy_data/index";

const HomeScreen = () => {
  return (
    <BaseLayout>
      <UserProfile />
      <Posts admin={admin} isSubscribed={user.isSubscribed} />
    </BaseLayout>
  );
};
export default HomeScreen;
