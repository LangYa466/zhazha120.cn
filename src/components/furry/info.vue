<script lang="ts" setup>
import { isMobile } from '~/shared/responsive'
import type { FurryCollectionItem } from '~/types/furry'

defineProps<{
	readonly value: FurryCollectionItem
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="fw-bold">
			<n-flex :justify="isMobile ? 'center' : undefined" :size="0" align="center">
				<n-text>{{ value.name }}</n-text>

				<n-divider vertical/>

				<n-text type="info">物种: {{ value.animal }}</n-text>
			</n-flex>
		</div>

		<div class="lt-md:text-center">
			<span>{{ value.description }}</span>
		</div>
	</n-flex>
</template>