import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import SuggestedProducts from "./SuggestedProducts";
import { getUserProfileAction } from "@/app/update-profile/actions";

type Props = {
  children: ReactNode;
  renderRightPanel?: boolean;
};

const BaseLayout = async ({ children, renderRightPanel = true }: Props) => {
  const userProfile = await getUserProfileAction();
  return (
    <div className="flex max-w-2xl lg:max-w-7xl mx-auto relative">
      <Sidebar userProfile={userProfile} />
      <div className="w-full lg:w-3/5 flex flex-col border-r">{children}</div>
      {renderRightPanel && <SuggestedProducts />}
    </div>
  );
};

export default BaseLayout;
