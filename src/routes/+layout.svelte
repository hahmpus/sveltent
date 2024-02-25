<script>
    import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div>
	<AppShell>
    
        <AppBar slot="header">
            <a href="/" class="btn variant-filled-primary">
                Home
            </a>
            <a href="/recipie" class="btn variant-filled-primary">
                Recipies
            </a>
        </AppBar>

        <!-- (sidebarLeft) -->
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
