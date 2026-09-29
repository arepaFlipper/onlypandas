"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className='mt-20 w-full flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-xl font-bold'>Redirecting...</h3>
        <p>Please wait...</p>
      </div>
    </div>
  );
};
export default Page;
