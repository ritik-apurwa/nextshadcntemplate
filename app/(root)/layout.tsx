import Footer from "@/components/Designs/Footer";
import Navbar from "@/components/Designs/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <div className="fixed top-0 left-0 right-0 border-sm bg-background z-50">
        <Navbar />
      </div>{" "}
      {/* Adjust mt value based on your navbar height */}
      <div className="my-16 min-h-screen flex-center">{children}</div>
      <Footer />
    </div>
  );
}
