<script lang="ts">
  import { fly } from "svelte/transition";
  import { closeModal } from "./store";

  export let isOpen: boolean = false;

</script>

{#if isOpen}
  <dialog open class="modal" transition:fly|global={{ y: 25, duration: 200 }} on:introstart on:outroend>
    <div class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={closeModal}>✕</button>
      <div class="mt-5">
        <slot />
      </div>
    </div>
  </dialog>
{/if}

<style>
  .modal {
    z-index: 1001;
  }
</style>