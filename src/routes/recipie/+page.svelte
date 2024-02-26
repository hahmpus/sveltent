
<script lang="ts">
    import Datalist from "$lib/components/Datalist.svelte";
</script>

<div class="items-center">
	<Datalist model="recipie">
		<div slot="item" let:item={item}>
			{item}
		</div>	
	</Datalist>
</div>
