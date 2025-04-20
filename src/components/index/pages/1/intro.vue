<script lang="ts" setup>
import information from '~/data/information'
import { isMobile } from '~/shared/isMobile'
</script>

<template>
	<n-flex :class="{ 'text-center': isMobile }" :vertical="isMobile" align="center" inline>
		<div class="size-25">
			<n-image :img-props="{ class: 'size-full' }" :src="information.avatar" class="rounded-full transition-(transform duration-500) hover:rotate-360"/>
		</div>

		<n-flex :size="0" inline vertical>
			<n-h1 class="m-0 fw-extrabold">{{ information.name }}</n-h1>

			<div class="leading-tight fw-bold">
				<n-text class="whitespace-pre" type="info">{{ information.description }}</n-text>
			</div>
		</n-flex>
	</n-flex>
</template>