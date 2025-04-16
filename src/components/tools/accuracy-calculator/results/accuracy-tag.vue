<script lang="ts" setup>
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()

defineProps<{
	readonly accuracy: number
}>()
</script>

<template>
	<n-tag :type="(accuracy >= toolsAccuracyCalculatorStore.editor.require_accuracy ? 'success' : 'error')">
		<custom-hidden-number :precision="toolsAccuracyCalculatorStore.precision" :value="accuracy"/>
	</n-tag>
</template>