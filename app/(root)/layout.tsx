import React from "react";
import {
  Footer,
  LeftSidebar,
  Navbar,
  RightSidebar,
} from "@/components/Designs/Test";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 border-sm bg-background z-50">
        <Navbar />
      </div>

      <div className="flex flex-1 max-w-7xl mx-auto mt-[58px]"> {/* Adjust mt value based on your navbar height */}
        <div className="w-64 hidden lg:block fixed left-0 top-[58px] bottom-0 overflow-y-auto">
          <LeftSidebar />
        </div>

        <main className="flex-1 overflow-y-auto p-4 lg:ml-64 xl:mr-64">
          {children}
        </main>

        <div className="hidden xl:block w-64  fixed right-0 top-[58px] bottom-0 overflow-y-auto">
          <RightSidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
}