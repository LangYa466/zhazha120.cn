<script lang="ts" setup>
import type { FurryCollectionItem } from '~/types/furry'

defineProps<{
	readonly value: FurryCollectionItem
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="fw-bold">
			<n-flex :size="0" align="center">
				<n-text>{{ value.name }}</n-text>

				<n-divider vertical/>

				<n-text type="info">物种: {{ value.animal }}</n-text>
			</n-flex>
		</div>

		<span>{{ value.description }}</span>
	</n-flex>
</template>