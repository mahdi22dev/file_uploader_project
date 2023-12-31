import { ContextProvidor } from "@/context/themecontext/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uploadupia",
  description: "upload your files and share them for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ContextProvidor>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ContextProvidor>
      </body>
    </html>
  );
}
