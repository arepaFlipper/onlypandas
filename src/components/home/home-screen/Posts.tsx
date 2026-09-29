"use client";
import UnderlinedText from "@/components/decorators/UnderlinedText";
import Post from "./Post";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { User } from "@/lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { getPaginatedPostsAction } from "./actions";

const Posts = ({ isSubscribed, admin }: { isSubscribed: boolean; admin: User }) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => await getPaginatedPostsAction(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const posts = data?.pages.flatMap((page) => page.posts);

  // Fetch the next page when the sentinel below the last post scrolls into view
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) fetchNextPage();
      },
      { rootMargin: "300px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div>
      {!isLoading &&
        posts?.map((post) => <Post key={post.id} post={post} admin={admin} isSubscribed={isSubscribed} />)}

      <div ref={sentinelRef} aria-hidden='true' />

      {isFetchingNextPage && (
        <div className='mt-10 px-3 flex flex-col gap-10'>
          <PostSkeleton />
        </div>
      )}

      {isLoading && (
        <div className='mt-10 px-3 flex flex-col gap-10'>
          {[...Array(3)].map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && posts?.length === 0 && (
        <div className='mt-10 px-3'>
          <div className='flex flex-col items-center space-y-3 w-full md:w-3/4 mx-auto '>
            <p className='text-xl font-semibold'>
              No Posts <UnderlinedText>Yet</UnderlinedText>
            </p>

            <p className='text-center'>
              Stay tuned for more posts from{" "}
              <span className='text-primary font-semibold text-xl'>OnlyPandas.</span> You can subscribe to
              access exclusive content when it&#39;s available.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Posts;
