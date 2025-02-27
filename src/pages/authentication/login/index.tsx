import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  
  return (
    <div>
      <h1>Login Page</h1>
      <Button onClick={login}>Login</Button>
    </div>
  );
}

export default LoginPage;