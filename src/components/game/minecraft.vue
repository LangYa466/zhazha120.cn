<script lang="ts" setup>
import minecraft from '~/data/minecraft'
</script>

<template>
	<n-card size="small" title="我的世界 (Minecraft)">
		<n-flex :wrap="false" align="center" class="lt-md:!flex-col">
			<n-image :img-props="{ class: 'lt-md:w-full md:h-60' }" :src="minecraft.skin"/>

			<span class="text-3xl fw-bold">{{ minecraft.name }}</span>
		</n-flex>
	</n-card>
</template>