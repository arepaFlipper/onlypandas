"use server";

import { posts, user as currentUser } from "@/dummy_data/index";

export async function getPostsAction() {
  return posts;
}

// Not exported: "use server" files may only export async functions
const POSTS_PER_PAGE = 4;

export async function getPaginatedPostsAction(page: number) {
  const start = page * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  return {
    posts: posts.slice(start, end),
    nextPage: end < posts.length ? page + 1 : null,
  };
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
