<script lang="ts">
	import { writable } from 'svelte/store';
	import api from "$lib/utils/request";
	import List from '$lib/components/List.svelte';
	import type { Recipie } from '@prisma/client';
    import { onDestroy } from 'svelte';
    import Box from '$lib/components/layout/Box.svelte';

	const filters:any = {};
	
	const [data, fetching, error, get] = api<Recipie[]>('GET', "/api/recipie", filters);
	let recipieList: Recipie[];
	const unsub = data.subscribe((val) => {
		recipieList = val;
	}); 
	
	onDestroy(() => {
		unsub();
	})

</script>

<div class="items-center">
	<Box>
		asdsdaasd
	</Box>
	<List items={recipieList}>
		<div class="" slot="item" let:prop={recipie}>
			{recipie.name}
		</div>
	</List>
</div>
 