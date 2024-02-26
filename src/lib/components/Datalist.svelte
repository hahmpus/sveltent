<script lang="ts">

    export let model: string;
    export let filters: Array<string> = [];

    import request from '$lib/utils/request';
    const [data, get, loading, error] = request('GET', model, filters);


</script>

<div>
    {#if $loading}
        loading...
    {:else if $error}
        error: {$error}
    {:else}
        {#each $data as item}
            <slot item={item} />
        {/each}
    {/if}
</div>
