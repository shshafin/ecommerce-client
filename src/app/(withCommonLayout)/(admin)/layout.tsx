
import { ReactNode } from "react";

const Adminlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <div className="my-3 flex w-full gap-12 flex-col md:flex-row min-h-screen ">
        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <p>this is sidebar</p>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-11/12">{children}</div>
      </div>
    </main>
  );
};

export default Adminlayout;