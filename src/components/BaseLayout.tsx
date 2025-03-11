import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  renderRightPanel?: boolean;
};

const BaseLayout = ({ children, renderRightPanel = true }: Props) => {
  return (
    <div className="flex max-w-2xl lg:max-w-7xl mx-auto relative">
      <p>Sidebar</p>
      <div className="w-full lg:w-3/5 flex flex-col border-r">{children}</div>
      {renderRightPanel && <p>SuggestedProducts</p>}
    </div>
  );
};

export default BaseLayout;
