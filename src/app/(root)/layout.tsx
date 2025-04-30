import Navbar from "@/components/Navbar.";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/signin");
  return (
    <div className="px-5 md:px-32 xl:px-42">
      <Navbar />
      {children}
    </div>
  );
}
