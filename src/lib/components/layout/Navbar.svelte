<script lang="ts">
    

</script>

<div class="navbar bg-neutral text-neutral-content">
    <span class="container w-full mx-auto">
        <div class="navbar-start text-left">
            
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