import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UsernamePrompt from "./UsernamePrompt";
import { useUserData } from "../../hooks/useUserData";

export default function RootLayout() {
  const { userData } = useUserData();

  if (!userData.userName) {
    return <UsernamePrompt />;
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans antialiased">
      <NavBar />
      <div className="flex-grow pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
