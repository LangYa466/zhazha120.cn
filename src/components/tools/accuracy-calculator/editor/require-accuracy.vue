<script lang="ts" setup>
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()
</script>

<template>
	<n-divider>过段要求</n-divider>

	<n-flex align="center" vertical>
		<n-slider v-model:value="toolsAccuracyCalculatorStore.editor.require_accuracy" :max="100" :min="0" :step="1"/>

		<n-input-group class="w-fit">
			<n-input-number v-model:value="toolsAccuracyCalculatorStore.editor.require_accuracy" :max="100" :min="0" :step="1"/>
			<n-input-group-label>%</n-input-group-label>
		</n-input-group>
	</n-flex>
</template>