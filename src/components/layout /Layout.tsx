import React from "react";
import { Sidebar } from "../common/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <Sidebar />
        </div>
        <div className="col-span-8">{children}</div>
      </div>
    </div>
  );
};
