<script lang="ts">

import { fade, fly } from "svelte/transition";
import { get } from "svelte/store";
import { modals, transitioning, exitBeforeEnter } from "./store";
import Modal from "./Modal.svelte";

let allmodals = get(modals);
let isTransitioning = get(transitioning);

modals.subscribe((value) => {
    allmodals = value;
});

transitioning.subscribe((value) => {
    isTransitioning = value;
});

function isLazy(component: any) {
    return typeof component.prototype === "undefined";
}

async function importComponent(component: any) {
    return component().then((res: any) => res.default);
}

</script>

<div>
    {#if allmodals.length > 0}
        <div class="backdrop" in:fade={{duration: 200}} out:fade={{duration: 200}} />
    {/if}

    <slot>
        {#each allmodals as modal, i (i)}
            {#if isLazy(modal.component)}
                {#await importComponent(modal.component)}
                    <slot name="loading" />
                {:then component}
                    <Modal isOpen={i === allmodals.length - 1 && !isTransitioning}>
                        <svelte:component 
                            this={component}
                            {...modal.props}
                            on:introstart={() => {
                                exitBeforeEnter.set(true);
                            }}
                            on:outroend={() => {
                                transitioning.set(false);
                            }}
                        />
                    </Modal>
                {/await}
            {:else}
                <Modal isOpen={i === allmodals.length - 1 && !isTransitioning}>
                    <svelte:component 
                        this={modal.component}
                        {...modal.props}
                        on:introstart={() => {
                            exitBeforeEnter.set(true);
                        }}
                        on:outroend={() => {
                            transitioning.set(false);
                        }}
                    />
                </Modal>
            {/if}
        {/each}
    </slot>
</div>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: oklch(var(--p));
        opacity: 0.2;
        /* background: rgba(0, 0, 0, 0.2); */
        z-index: 1000;
        pointer-events: none;
    }
</style>