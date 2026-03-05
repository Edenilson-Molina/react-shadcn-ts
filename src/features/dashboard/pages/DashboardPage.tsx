import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { logout, permisos } = useAuthStore();
  console.log("Permisos del usuario:", permisos);

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