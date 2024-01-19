import { Navbar } from "@/components/index";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oaks Blog",
  description: "powered by next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  information: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
