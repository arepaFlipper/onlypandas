import HomeScreen from "@/components/home/home-screen/HomeScreen";
import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Home = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <main>
      {(user) ? <HomeScreen /> : <AuthScreen />}
    </main>
  );
};

export default Home;
