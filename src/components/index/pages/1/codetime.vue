<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<template v-if="information.codetime_id !== null">
		<n-image :img-props="{ class: 'size-full' }" :src="(`https://img.shields.io/endpoint?style=for-the-badge&url=https://api.codetime.dev/shield?id=${information.codetime_id}`)"/>
	</template>
</template>