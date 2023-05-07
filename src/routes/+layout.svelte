<script lang="ts">
	import '$lib/styles/global.css';

	import AuthProvider from '$lib/stores/auth/AuthProvider.svelte';
</script>

<AuthProvider>
	<slot />
</AuthProvider>
