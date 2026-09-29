import BaseLayout from "@/components/BaseLayout";
import MessagesView from "@/components/chat/MessagesView";

const ChatPage = async ({ params }: { params: Promise<{ chatId: string }> }) => {
  const { chatId } = await params;

  return (
    <BaseLayout renderRightPanel={false}>
      <MessagesView chatId={chatId} />
    </BaseLayout>
  );
};
export default ChatPage;
