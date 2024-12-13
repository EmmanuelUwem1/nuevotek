// app/layout.js
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Nuevotek",
  description:
    "Revolutionizing connectivity with state-of-the-art network infrastructure and innovative IT solutions, ensuring your business stays ahead in the digital age.",
  keywords:
    "network infrastructure, IT solutions, connectivity, business optimization, digital transformation, Tech",
};

const myFont = localFont({
  src: [
    {
      path: "/fonts/StyreneAWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/StyreneAWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/StyreneAWeb-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/StyreneAWeb-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
