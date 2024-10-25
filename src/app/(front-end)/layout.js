import React from "react";
import Navbar from "../../components/frontend/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-6 lg:px-8 px-2">{children}</div>
    </div>
  );
}