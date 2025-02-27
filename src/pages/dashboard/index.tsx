import { Button } from "@/components/ui/button";
import paths from "@/routes/path";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { logout } = useAuthStore();
  const navegate = useNavigate();

  const handleLogout = () => {
    logout();
    navegate(paths.login);
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={ handleLogout }>Logout</Button>
    </div>
  );
}

export default DashboardPage;