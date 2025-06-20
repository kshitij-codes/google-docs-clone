"use server"
import { ConvexHttpClient } from "convex/browser"
import {auth, clerkClient} from "@clerk/nextjs/server"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function getDocuments(ids: Id<"documents">[]) {
    return await convex.query(api.documents.getByIds, {ids})
}

export async function getUsers() {
    const {sessionClaims} = await auth()
    const clerk = await clerkClient()

    if (!sessionClaims || typeof sessionClaims.o !== "object" || sessionClaims.o === null || !("id" in sessionClaims.o)) {
        throw new Error("Invalid session claims or organization ID not found.");
    }

    const response = await clerk.users.getUserList({
        organizationId: [(sessionClaims.o as { id: string }).id as string]
    })
    const users = response.data.map((user) => ({
        id: user.id,
        name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl
    }))
    console.log({users})
    return users
}