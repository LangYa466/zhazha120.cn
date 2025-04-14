<script lang="ts" setup>
import type { Writeable } from 'zod'
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<
	Writeable<Preset>
>('value', {
	required: true
})

const presets = await queryCollection('accuracy_calculator_presets').all()

const selectedPreset = ref()

const presetSelectOptions = computed(() => {
	return presets.map(preset => {
		return {
			label: preset.name,
			value: preset.id
		}
	})
})

watch(selectedPreset, async newSelectedPreset => {
	const preset = presets.find(preset => newSelectedPreset === preset.id)

	if (preset === undefined) {
		return
	}

	data.value.name = preset.name
	data.value.maps = preset.maps
	data.value.require_accuracy = preset.require_accuracy
})
</script>

<template>
	<n-card size="small" title="预设">
		<n-select v-model:value="selectedPreset" :options="presetSelectOptions" filterable/>
	</n-card>
</template>