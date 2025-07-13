// import Footer from "@/src/components/UI/Footer";
import { Footer } from "@/components/ui/footer/footer";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Header />
      <Navbar />
      <main>{children}</main>{" "}
      {/* Make sure this is a single child */}
      <Footer />
    </div>
  );
};

export default layout;
