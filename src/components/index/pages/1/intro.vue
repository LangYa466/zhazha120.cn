<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-flex align="center" class="lt-md:(!flex-col !justify-center text-center)">
		<div class="size-25">
			<n-image :img-props="{ class: 'size-full' }" :src="information.avatar" class="rounded-full transition-(transform duration-500) hover:rotate-360"/>
		</div>

		<n-flex :size="0" vertical>
			<n-h1 class="m-0 fw-extrabold">{{ information.name }}</n-h1>

			<div class="leading-tight fw-bold">
				<n-text class="whitespace-pre" type="info">{{ information.description }}</n-text>
			</div>
		</n-flex>
	</n-flex>
</template>