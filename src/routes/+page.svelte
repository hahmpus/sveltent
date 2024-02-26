
<script>
	import surreal from '$lib/utils/surreal';
	import Datalist from "$lib/components/Datalist.svelte";

	async function add() {
		let response = await surreal.create('recipie', {name: 'test'});
		console.log(response);
	}
	
	async function fetch() {
		let response = await surreal.select('recipie');
		console.log(response);
	}


</script>

<div class="items-center">
	<button type="button" class="variant-filled" on:click={add}>add</button>
	<button type="button" class="variant-filled" on:click={fetch}>fetch</button>

	<Datalist model="recipie" let:item={item}>
	
			{item.name}
	
	</Datalist>
</div>

