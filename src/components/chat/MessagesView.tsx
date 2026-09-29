"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatChatTime, markChatAsRead, sendMessage, useChats } from "./chatStore";

const MessagesView = ({ chatId }: { chatId?: string }) => {
  const chats = useChats();
  const activeChat = chats.find((c) => c.id === chatId);
  const [draft, setDraft] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) markChatAsRead(chatId);
  }, [chatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [chatId, activeChat?.messages.length]);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || !chatId) return;
    sendMessage(chatId, text);
    setDraft("");
  };

  return (
    <div className='flex h-screen'>
      {/* Chat list — on small screens it is hidden while a conversation is open */}
      <aside className={cn("w-full md:w-72 md:border-r flex-col", chatId ? "hidden md:flex" : "flex")}>
        <h1 className='text-xl font-bold px-4 py-3 border-b'>Messages</h1>
        <ul className='flex-1 overflow-y-auto'>
          {chats.map((chat) => {
            const last = chat.messages[chat.messages.length - 1];
            return (
              <li key={chat.id}>
                <Link
                  href={`/messages/${chat.id}`}
                  className={cn("flex items-center gap-3 px-4 py-3 hover:bg-muted", {
                    "bg-muted": chat.id === chatId,
                  })}
                >
                  <Avatar>
                    <AvatarImage src={chat.user.image} className='object-cover' />
                    <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className='flex-1 min-w-0'>
                    <div className='flex justify-between gap-2'>
                      <span className='font-semibold text-sm truncate'>{chat.user.name}</span>
                      <span className='text-xs text-muted-foreground' suppressHydrationWarning>
                        {formatChatTime(last.createdAt)}
                      </span>
                    </div>
                    <p className={cn("text-sm truncate", chat.unread ? "font-semibold" : "text-muted-foreground")}>
                      {last.fromMe && "You: "}
                      {last.text}
                    </p>
                  </div>
                  {chat.unread > 0 && (
                    <span className='min-w-5 h-5 px-1 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center'>
                      {chat.unread}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Conversation */}
      <section className={cn("flex-1 flex-col min-w-0", chatId ? "flex" : "hidden md:flex")}>
        {!activeChat && (
          <div className='flex-1 flex flex-col items-center justify-center gap-2 text-muted-foreground px-4 text-center'>
            <MessageSquare className='w-12 h-12' />
            <p>{chatId ? "This conversation doesn't exist." : "Select a conversation to start chatting"}</p>
          </div>
        )}

        {activeChat && (
          <>
            <header className='flex items-center gap-3 px-4 py-3 border-b'>
              <Link href='/messages' className='md:hidden'>
                <ArrowLeft className='w-5 h-5' />
              </Link>
              <Avatar>
                <AvatarImage src={activeChat.user.image} className='object-cover' />
                <AvatarFallback>{activeChat.user.name[0]}</AvatarFallback>
              </Avatar>
              <span className='font-semibold truncate'>{activeChat.user.name}</span>
            </header>

            <div className='flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2'>
              {activeChat.messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "max-w-[75%] rounded-2xl px-3 py-1.5 text-sm",
                    m.fromMe ? "self-end bg-sky-500 text-white" : "self-start bg-muted"
                  )}
                >
                  {m.text}
                  <span
                    className={cn("block text-[10px]", m.fromMe ? "text-sky-100" : "text-muted-foreground")}
                    suppressHydrationWarning
                  >
                    {formatChatTime(m.createdAt)}
                  </span>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSend} className='flex gap-2 p-3 border-t'>
              <Input placeholder='Write a message...' value={draft} onChange={(e) => setDraft(e.target.value)} />
              <Button type='submit' size='icon' disabled={!draft.trim()}>
                <Send className='w-4 h-4' />
              </Button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default MessagesView;
