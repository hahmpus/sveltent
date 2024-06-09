<script lang="ts">
    import Box from "$lib/components/layout/Box.svelte";
    import { fly } from "svelte/transition";
    import Modal from "../Modal.svelte";
    import { openModal } from "../store";

    export let isOpen: boolean = false;

</script>

{#if isOpen}
    <Modal>
        <Box>
            asdhjjkashdjhkasd
            <button class="button" on:click={() => openModal(Box)}>asd</button>
        </Box>
    </Modal>

{/if}