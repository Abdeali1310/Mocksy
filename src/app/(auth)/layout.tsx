import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isUserAuthenticated = await isAuthenticated();

  if(isUserAuthenticated) redirect('/');
  return <div className="auth-layout">{children}</div>;
}
