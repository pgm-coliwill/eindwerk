import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { montserrat, poppins } from "@/styles/fonts";
import "@styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
