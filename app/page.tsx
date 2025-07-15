"use client";

import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Authenticated>
        <UserButton />
        <div>Hello you are authenticated</div>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
