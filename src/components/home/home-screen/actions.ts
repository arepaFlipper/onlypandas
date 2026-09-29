"use server";

import { posts, user as currentUser } from "@/dummy_data/index";

export async function getPostsAction() {
  return posts;
}

export async function deletePostAction(postId: string) {
  return { success: true };
}

export async function likePostAction(postId: string) {
  return { success: true };
}

export async function commentOnPostAction(postId: string, text: string) {
  return {
    success: true,
    comment: {
      id: `comment-${Date.now()}`,
      text,
      postId,
      userId: currentUser.id,
      user: currentUser,
      createdAt: new Date(),
    },
  };
}
