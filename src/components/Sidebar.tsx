"use client"; // Ensure this runs in the browser

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Sidebar = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex lg:w-1/5 flex-col gap-3 px-2 border-r sticky left-0 top-0 h-screen">
      {isAuthenticated ? (
        <>
          <p>{user?.email || "User is logged in"}</p>
        </>
      ) : (
        <p>User is not logged in</p>
      )}
    </div>
  );
};

export default Sidebar;
