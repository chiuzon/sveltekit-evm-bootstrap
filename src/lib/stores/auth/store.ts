import { derived, writable, type Readable } from 'svelte/store'
import { createPublicClient, type Address, type WalletClient, http } from 'viem'
import { Chains } from './types'
import { chainsMetadata } from './constants'

export const activeChain = writable<Chains>(Chains.ETH)
export const walletClient = writable<WalletClient | undefined>()

export const walletAccount = derived<[Readable<WalletClient | undefined>], Address | undefined>([walletClient], ([$walletClient], set) => {
    if (!$walletClient) { set(undefined); return undefined };

    $walletClient?.requestAddresses().then(accounts => {
        const [account] = accounts

        set(account)
    })
})

export const publicClient = derived(activeChain, ($activeChain) => {
    return createPublicClient({
        chain: chainsMetadata[$activeChain],
        transport: http()
    })
})

export const accountENS = derived([walletAccount], ([$walletAccount], set) => {
    if (!$walletAccount) return undefined;

    /** ENS resolver exists just on the mainnet  */
    const ethPublicClient = createPublicClient({
        chain: chainsMetadata[Chains.ETH],
        transport: http()
    })

    ethPublicClient.getEnsName({ address: $walletAccount }).then((ens) => set(ens))
})