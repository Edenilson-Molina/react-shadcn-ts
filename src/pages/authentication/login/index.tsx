import { Button } from "@/components/ui/button";
import paths from "@/routes/path";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, isAuthenticated } = useAuthStore();
  const navegate = useNavigate();
  
  const handleLogin = () => {
    // Mock data
    const dataUser = { 
      roles: ["admin", "user"], 
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    };
    login(dataUser);
    navegate(paths.default);
  }
   
  useEffect(() => {
    if(isAuthenticated) {
      navegate(paths.default);
    }
  });

  return (
    <div>
      <h1>Login Page</h1>
      <Button onClick={ handleLogin }>Login</Button>
    </div>
  );
}

export default LoginPage;