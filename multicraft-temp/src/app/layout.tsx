import type { Metadata } from "next";
import "./globals.css";

// Metadata se browser tab mein sahi naam aur icon show hoga
export const metadata: Metadata = {
  title: "Multicraft Agency | Premium Digital Solutions",
  description: "Transform your business with cutting-edge technology and AI solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-400 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}