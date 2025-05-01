import type { Metadata } from "next";
import {  Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mocksy',
  description: 'Your AI-powered mock interview partner.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


    <html lang="en" className="suppressHydrationWarning">
      <body
        className={`${spaceGrotesk.className} antialiased pattern`}
      >
        {children}
      </body>
    </html>
        </ThemeProvider>
  );
}
