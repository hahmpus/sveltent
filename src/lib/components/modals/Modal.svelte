<script lang="ts">
  import { fly } from "svelte/transition";
  import { closeModal } from "./store";


</script>

<dialog open class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
  <div class="modal-box">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={closeModal}>✕</button>
    <div class="mt-5">
      <slot />
    </div>
  </div>
</dialog>

<style>
  .modal {
    z-index: 1001;
  }
</style>