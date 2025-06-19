"use client";

import { ReactNode } from "react";
import {ConvexProviderWithClerk} from "convex/react-clerk"
import {ClerkProvider, useAuth, SignIn} from "@clerk/clerk-react"
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { FullscreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set");
  }
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ConvexProviderWithClerk 
        useAuth={useAuth} 
        client={convex}
      >
        <Authenticated>
          {children}
        </Authenticated>
        <Unauthenticated>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <SignIn />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullscreenLoader label="Signing in" />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}