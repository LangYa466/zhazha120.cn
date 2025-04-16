<script lang="ts" setup>
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()

const presets = await queryCollection('accuracy_calculator_presets').all()

const presetSelectOptions = computed(() => {
	return presets.map(preset => {
		return {
			label: preset.name,
			value: preset.id
		}
	})
})

const handleSelectChange = async (newSelectedPreset: string) => {
	const preset = presets.find(preset => newSelectedPreset === preset.id)

	if (preset === undefined) {
		return
	}

	toolsAccuracyCalculatorStore.$patch({
		editor: {
			name: preset.name,
			maps: preset.maps,
			require_accuracy: preset.require_accuracy
		}
	})
}
</script>

<template>
	<n-card class="h-full" size="small" title="预设">
		<n-select :options="presetSelectOptions" filterable @update:value="handleSelectChange"/>
	</n-card>
</template>