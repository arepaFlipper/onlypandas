import BaseLayout from "@/components/BaseLayout";
import PurchaseSummary from "./PurchaseSummary";
import { Suspense } from "react";

const Page = () => {
  return (
    <BaseLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <PurchaseSummary />
      </Suspense>
    </BaseLayout>
  );
};
export default Page;
