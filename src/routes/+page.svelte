
<script lang="ts">
	import surreal from '$lib/utils/surreal';

	async function add() {
		let response = await surreal.create('recipie', {name: 'test'});
	}
	
	async function fetch() {
		let response = await surreal.select('recipie');
		console.log(response);
	}

</script>

<div class="items-center">
	<button type="button" class="variant-filled" on:click={add}>add</button>
	<button type="button" class="variant-filled" on:click={fetch}>fetch</button>
</div>
