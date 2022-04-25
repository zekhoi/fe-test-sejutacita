import type { NextPage } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
