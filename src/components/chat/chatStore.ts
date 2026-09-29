"use client";

import { useSyncExternalStore } from "react";
import { chats as initialChats, type Chat } from "@/dummy_data/chats";

// Tiny in-memory store so the sidebar badge and the /messages route share the same
// (hardcoded) chat state across client-side navigation. Resets on a full reload.
let chats: Chat[] = initialChats;
const listeners = new Set<() => void>();

const setChats = (updater: (prev: Chat[]) => Chat[]) => {
  chats = updater(chats);
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useChats = () => useSyncExternalStore(subscribe, () => chats, () => initialChats);

export const markChatAsRead = (chatId: string) =>
  setChats((prev) => prev.map((c) => (c.id === chatId && c.unread > 0 ? { ...c, unread: 0 } : c)));

export const sendMessage = (chatId: string, text: string) =>
  setChats((prev) =>
    prev.map((c) =>
      c.id === chatId
        ? { ...c, messages: [...c.messages, { id: `m-${Date.now()}`, text, fromMe: true, createdAt: new Date() }] }
        : c
    )
  );

export const formatChatTime = (date: Date) => {
  const diffMin = Math.round((Date.now() - date.getTime()) / 60_000);
  if (diffMin < 1) return "now";
  if (diffMin < 60) return `${diffMin}m`;
  if (diffMin < 60 * 24) return `${Math.round(diffMin / 60)}h`;
  return date.toLocaleDateString();
};
