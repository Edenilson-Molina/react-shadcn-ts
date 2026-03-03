import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { logout } = useAuthStore();
  const navegate = useNavigate();

  return (
    <>
      <header>
      </header>
      <main>
        <h1 className="text-lg font-bold">Dashboard</h1>  
      </main>
    </>
  );
}

export default DashboardPage;