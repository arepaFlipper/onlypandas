"use client";

import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";

const AuthButtons = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col'>
      {["Sign up", "Login"].map((text) => (
        <RegisterLink key={text} className='flex-1'>
          <Button
            className='w-full'
            variant={text === "Sign up" ? "default" : "secondary"}
            disabled={loading}
            onClick={() => setLoading(true)}
          >
            {text}
          </Button>
        </RegisterLink>
      ))}
    </div>
  );
};

export default AuthButtons;
