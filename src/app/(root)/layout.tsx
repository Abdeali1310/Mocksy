import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
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
    
      <div className="px-5 mb-12 md:px-28 xl:px-42">
        <Navbar />
        {children}
        <Toaster />
      </div>
  );
}
