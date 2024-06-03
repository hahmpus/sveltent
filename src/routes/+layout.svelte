<script>
    import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppRail, AppRailAnchor, AppRailTile, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
	/** @type {import('./$types').LayoutData} */
	export let data;

    let currentTile = 0;
</script>

<div>
	<AppShell>
    
        <!-- (header) -->

        <AppRail slot="sidebarLeft">
            <!-- <a href="/" class="btn variant-filled-primary">
                Home
            </a>
            <a href="/recipie" class="btn variant-filled-primary">
                Recipies
            </a> -->
            <svelte:fragment slot="lead">
                <AppRailAnchor href="/" >(icon)</AppRailAnchor>
            </svelte:fragment>
            <!-- --- -->
            <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <span>Tile 1</span>
            </AppRailTile>
            <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <span>Tile 2</span>
            </AppRailTile>
            <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <span>Tile 3</span>
            </AppRailTile>
            <!-- --- -->
            <svelte:fragment slot="trail">
                <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
            </svelte:fragment>
        </AppRail>

        <!-- (sidebarRight) -->
        <!-- (pageHeader) -->

		<PageTransition key={data.pathname}>
			<div class="container h-full mx-auto justify-center">
                <slot />
			</div>
		</PageTransition>


        <!-- (footer) -->
    </AppShell>
</div>
