import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <Link href="./favicon.ico" />
        {/* Thay '/path/to/your/favicon.ico' bằng đường dẫn đến file favicon của bạn */}
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </body>
      </html>
    </>
  );
}
