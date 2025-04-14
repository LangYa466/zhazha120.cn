<script lang="ts" setup>
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})

defineProps<{
	readonly accuracy: number
	readonly precision: number
}>()
</script>

<template>
	<n-tag :type="(accuracy >= data.require_accuracy ? 'success' : 'error')">
		<custom-hidden-number :precision="precision" :value="accuracy"/>
	</n-tag>
</template>