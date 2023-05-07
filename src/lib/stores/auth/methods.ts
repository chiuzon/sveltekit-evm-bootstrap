import { getContext } from "svelte"
import type { Chains } from "./types"


export const CONTEXT_KEY = "AUTH_CONTEXT"

export function useAuth() {
    const context = getContext<AuthMethods>(CONTEXT_KEY)

    if (!context) throw new Error("AuthProvider isn't valid!")

    return context
}

export interface AuthMethods {
    connect: () => Promise<void>,
    disconnect: () => Promise<void>,
    switchChain: (chain: Chains) => Promise<void>
}