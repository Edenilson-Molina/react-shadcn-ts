import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const DashboardPage = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={ logout }>Logout</Button>
    </div>
  );
}

export default DashboardPage;