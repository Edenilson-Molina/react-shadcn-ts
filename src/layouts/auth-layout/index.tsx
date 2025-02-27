import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}

export default AuthLayout;