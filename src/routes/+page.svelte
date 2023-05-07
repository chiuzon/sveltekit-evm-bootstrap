<script lang="ts">
	import { chainsMetadata } from '$lib/stores/auth/constants';
	import { useAuth } from '$lib/stores/auth/methods';
	import { accountENS, walletAccount, activeChain } from '$lib/stores/auth/store';
	import { Chains } from '$lib/stores/auth/types';

	const { connect, disconnect, switchChain } = useAuth();

	async function switchToETH() {
		$activeChain = Chains.ETH;
		if ($walletAccount) switchChain($activeChain);
	}

	async function switchToOptimism() {
		$activeChain = Chains.OP;
		if ($walletAccount) switchChain($activeChain);
	}
</script>

<div class=" bg-gray-900 w-full h-screen text-white flex justify-center">
	<div class="flex flex-col gap-1 border-gray-800 rounded border w-1/2 h-auto p-5">
		<p>Active Chain: {chainsMetadata[$activeChain].name}</p>
		<button
			class="p-2 bg-blue-500 rounded hover:bg-blue-700 active:bg-blue-400"
			on:click={switchToETH}>Switch to ETH</button
		>
		<button
			class="p-2 bg-blue-500 rounded hover:bg-blue-700 active:bg-blue-400"
			on:click={switchToOptimism}>Switch to Optimism</button
		>
		{#if $walletAccount}
			<div class="gap-2 flex flex-col">
				<p>Address: {$walletAccount}</p>
				{#if $accountENS}
					<p>Account ENS: {$accountENS}</p>
				{/if}
				<button
					class="p-2 bg-blue-500 rounded hover:bg-blue-700 active:bg-blue-400"
					on:click={() => disconnect()}>Disconnect</button
				>
			</div>
		{:else}
			<div>
				<button
					class="p-2 bg-blue-500 rounded hover:bg-blue-700 active:bg-blue-400"
					on:click={() => connect()}>Connect</button
				>
			</div>
		{/if}
	</div>
</div>
