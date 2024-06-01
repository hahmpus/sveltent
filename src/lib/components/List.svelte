<script lang="ts">
    type T = $$Generic;
    export let items: Array<T>;
</script>

<div class="data-list-wrapper">
    {#if items}
        {#each items as item}
            <slot name="item" prop={item}></slot>
        {/each} 
    {:else}
        <p>...</p>
    {/if}
</div>

<style>
</style>