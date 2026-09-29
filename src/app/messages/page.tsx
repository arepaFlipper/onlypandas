import BaseLayout from "@/components/BaseLayout";
import MessagesView from "@/components/chat/MessagesView";

const MessagesPage = () => {
  return (
    <BaseLayout renderRightPanel={false}>
      <MessagesView />
    </BaseLayout>
  );
};
export default MessagesPage;
