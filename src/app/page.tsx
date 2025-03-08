import HomeScreen from "@/components/home/home-screen/HomeScreen";
import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Home = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(`🏝️%cpage.tsx:8 - user`, 'font-weight:bold; background:#2ad500;color:#fff;'); //DELETEME:
  console.log(user); // DELETEME:
  return (
    <main>
      {(user) ? <HomeScreen /> : <AuthScreen />}
    </main>
  );
};

export default Home;
