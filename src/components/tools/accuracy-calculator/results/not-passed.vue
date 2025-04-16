<script lang="ts" setup>
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const props = defineProps<{
	readonly difference: number
}>()

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()

const absoluteDifference = computed(() => {
	return Math.abs(props.difference)
})
</script>

<template>
	<n-alert type="error">
		<n-flex align="center" justify="space-between">
			<n-flex :size="0">
				<span class="mr-2">好可惜, 就差</span>

				<custom-hidden-number :precision="toolsAccuracyCalculatorStore.precision" :value="absoluteDifference"/>

				<span>%</span>
			</n-flex>

			<tools-accuracy-calculator-results-share size="tiny"/>
		</n-flex>
	</n-alert>
</template>