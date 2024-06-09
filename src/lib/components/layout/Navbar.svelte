<script lang="ts">
    

</script>

<div class="navbar bg-neutral text-neutral-content">
    <span class="w-full max-w-screen-lg mx-auto">
        <div class="navbar-start">
            
            <slot name="start"></slot>
        </div>

        <div class="navbar-center">
            <slot />
        </div>

        <div class="navbar-end text-right">
            <slot name="end"></slot>
        </div>
    </span>
</div>

<style>
</style>