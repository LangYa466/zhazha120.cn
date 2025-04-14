<script lang="ts" setup>
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})
</script>

<template>
	<template v-if="data.require_accuracy !== undefined">
		<n-divider>过段要求</n-divider>

		<n-flex align="center" vertical>
			<n-slider v-model:value="data.require_accuracy" :max="100" :min="0" :step="1"/>

			<n-input-group class="w-fit">
				<n-input-number v-model:value="data.require_accuracy" :max="100" :min="0" :step="1"/>
				<n-input-group-label>%</n-input-group-label>
			</n-input-group>
		</n-flex>
	</template>
</template>