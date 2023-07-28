import { ContextProvidor } from "@/context/themecontext/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uploadupia",
  description: "upload your files and share them for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextTopLoader color='#fff5cc' />
        <ContextProvidor>
          <Navbar />
          {children}
          <Footer />
        </ContextProvidor>
      </body>
    </html>
  );
}
