import { ThemeProvider } from "@/context/themecontext/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/component/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uploadupia",
  description: "upload your files and share them for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
