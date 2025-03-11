"use client"
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import SuggestedProducts from "./SuggestedProducts";

type Props = {
  children: ReactNode;
  renderRightPanel?: boolean;
};

const BaseLayout = ({ children, renderRightPanel = true }: Props) => {
  return (
    <div className="flex max-w-2xl lg:max-w-7xl mx-auto relative">
      <Sidebar />
      <div className="w-full lg:w-3/5 flex flex-col border-r">{children}</div>
      {renderRightPanel && <SuggestedProducts />}
    </div>
  );
};

export default BaseLayout;
