import { cookies } from "next/headers";
import HomeScreen from "@/components/home/home-screen/HomeScreen";
import AuthScreen from "@/components/home/auth-screen/AuthScreen";

const Home = async () => {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("demo_logged_in")?.value === "true";

  return (
    <main>
      {isLoggedIn ? <HomeScreen /> : <AuthScreen />}
    </main>
  );
};

export default Home;
