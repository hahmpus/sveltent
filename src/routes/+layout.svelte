<script>
    import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.postcss';

	// Floating UI for Popups
	import { AppBar, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';

	
	/** @type {import('./$types').LayoutData} */
	export let data;

    let currentTile = 0;
</script>

<div>

    <div class="bg-surface-100-800-token">
        <div class="mx-auto max-w-6xl">
            <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                (title)
                <svelte:fragment slot="trail">(actions)</svelte:fragment>
            </AppBar>
        </div>
    </div>

    <div class="mx-auto max-w-6xl">
		<PageTransition key={data.pathname}>
			<div class="container h-full mx-auto justify-center">
                <slot />
			</div>
		</PageTransition>
    </div>

</div>
