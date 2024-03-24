//@ts-ignore
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Furnixlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Furnixlayout;
