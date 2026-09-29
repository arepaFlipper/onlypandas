"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { useChats } from "./chatStore";

const MessagesLink = () => {
  const chats = useChats();
  const unreadTotal = chats.reduce((sum, c) => sum + c.unread, 0);

  return (
    <Link
      href='/messages'
      className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
    >
      <span className='relative'>
        <MessageSquare className='w-6 h-6' />
        {unreadTotal > 0 && (
          <span className='absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-xs flex items-center justify-center'>
            {unreadTotal}
          </span>
        )}
      </span>
      <span className='hidden lg:block'>Messages</span>
    </Link>
  );
};

export default MessagesLink;
