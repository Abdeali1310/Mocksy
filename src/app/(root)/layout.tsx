import Navbar from "@/components/Navbar.";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="lg:px-42">
    <Navbar />
    {children}
    </div>;
}
