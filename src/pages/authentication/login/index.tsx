import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
    if (isAuthenticated) {
      navegate(paths.default);
    }
  });

  return (
    <>
      <main className="bg-center bg-cover flex min-h-screen justify-center items-center p-8">
        <Card className="w-full sm:w-[24rem] backdrop-blur-xl bg-white/30 dark:bg-black/30 border-none">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center text-3xl font-bold">
                Iniciar sesión
              </div>
            </CardTitle>
            <CardDescription className="flex justify-center">¡Bienvenido/a!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Usuario</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleLogin} className="w-full">Ingresar</Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}

export default LoginPage;