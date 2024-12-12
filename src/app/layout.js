import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata = {
  title: "Nuevotek",
  description:
    "Revolutionizing connectivity with state-of-the-art network infrastructure and innovative IT solutions, ensuring your business stays ahead in the digital age.",
  keywords:
    "network infrastructure, IT solutions, connectivity, business optimization, digital transformation, Tech",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-styrene`}
      >
        <Header />
        <main className="">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
