<script>
    import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.postcss';
	
	/** @type {import('./$types').LayoutData} */
	export let data;

</script>

<div>

    <div class="navbar bg-primary text-primary-content">
        <span class="w-full max-w-screen-lg mx-auto">

            <button class="btn btn-ghost text-xl">daisyUI</button>
        </span>
    </div>

    <PageTransition key={data.pathname}>
        <div class="container h-full mx-auto justify-center">
            <slot />
        </div>
    </PageTransition>


</div>

<style>
    .maw-1140 {
        max-width: 1140px;
    }
</style>