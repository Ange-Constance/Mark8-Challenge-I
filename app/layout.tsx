import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import GlobalHolder from "./global";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalHolder>
      <html lang="en">
        <body>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </GlobalHolder>
  );
}
