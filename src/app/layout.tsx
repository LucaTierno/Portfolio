import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Luca Tierno | Frontend Developert",
  description: "Portfolio de Luca Tierno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        {children}
        <Footer />
      </body>
    </html>
  );
}
