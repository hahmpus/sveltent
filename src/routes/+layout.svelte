<script lang="ts">
    import Navbar from '$lib/components/layout/Navbar.svelte';
    import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.postcss';
    import Modals from '$lib/components/modals/Modals.svelte';
    import { openModal, onBeforeClose } from '$lib/components/modals/store';
    import type { LayoutData } from './$types';

    import TestModal from '$lib/components/modals/views/TestModal.svelte';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	export let data: LayoutData;


</script>

<div>

    <Navbar>
        <div slot="start">
            <a href="/" class="btn btn-ghost btn-sm rounded-btn">Home</a>
            <a href="/recipie" class="btn btn-ghost btn-sm rounded-btn">Recipie</a>
        </div>
    </Navbar>


    <div class="container h-full mx-auto justify-center ">
        <Breadcrumbs />
        <PageTransition key={data.pathname}>
            <button on:click={() => openModal(TestModal)}>open</button>
            <slot />
        </PageTransition>
    </div>


    <Modals />

</div>


<style>

</style>