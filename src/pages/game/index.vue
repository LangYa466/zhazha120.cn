<script lang="ts" setup>
definePageMeta({
	name: '游戏'
})
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<game-minecraft/>

			<game-geometrydash/>

			<game-tetrio/>

			<game-osumania/>

			<game-malody/>
		</n-flex>
	</div>
</template>