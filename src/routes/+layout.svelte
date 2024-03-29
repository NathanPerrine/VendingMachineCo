<script lang="ts">
    import type { LayoutData } from './$types';
    import "../app.css"
    import Header from '$lib/components/header/header.svelte';
    export let data: LayoutData;
</script>

<Header />
<slot />