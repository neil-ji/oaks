import { Aside, Footer, Navbar } from "@/components/index";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oaks Blog",
  description: "A blog website powered by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Aside />
        <main>
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
