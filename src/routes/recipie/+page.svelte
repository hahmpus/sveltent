<script lang="ts">
	import { writable } from 'svelte/store';
	import api from "$lib/utils/request";
	import List from '$lib/components/List.svelte';
	import type { Recipie } from '@prisma/client';
    import { onDestroy } from 'svelte';

	const filters:any = {};

	
	const [data, fetching, error, get] = api<Recipie[]>('GET', "/api/recipie", filters);
	let recipies: Recipie[];

	const unsub = data.subscribe((val) => {
		recipies = val;
	}); 
	
	onDestroy(() => {
		unsub();
	})

</script>

<div class="items-center">




	<List items={recipies}>
		<div class="" slot="item" let:prop={recipie}>
			{recipie.name}
		</div>
	</List>
</div>
 