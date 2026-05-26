import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, LogIn, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginService } from "@/features/auth/services/auth.services";
import { useSessionStore } from "@/store/session.store";

const LoginPage = () => {
    const navigate = useNavigate();
    const { setSessionFromToken } = useSessionStore();

    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("pass123");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage("");
        setIsLoading(true);

        try {
            const response = await loginService({ email, password });
            const { accessToken } = response.data;
            
            if (!accessToken) {
                throw new Error("Respuesta de login inválida");
            }

            setSessionFromToken(accessToken);

            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setErrorMessage("No fue posible iniciar sesión. Verifica tus credenciales.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center bg-muted/30 p-4">
            <Card className="w-full max-w-md border-border/60 shadow-xl">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
                    <CardDescription>
                        Accede con tu correo y contraseña para continuar
                    </CardDescription>
                </CardHeader>

                <form onSubmit={onSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <div className="relative">
                                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@example.com"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="pl-9"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Contraseña</Label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="pl-9 pr-10"
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </Button>
                            </div>
                        </div>

                        {errorMessage && (
                            <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                                {errorMessage}
                            </p>
                        )}
                    </CardContent>

                    <CardFooter>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            { isLoading ? 
                                <>
                                    <Loader2 className="animate-spin" />
                                    Ingresando...
                                </>
                                : 
                                <>
                                    <LogIn className="size-4" />
                                    Ingresar
                                </>
                            }
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </main>
    );
};

export default LoginPage;