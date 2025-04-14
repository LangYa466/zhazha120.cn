<script lang="ts" setup>
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})
</script>

<template>
	<n-card size="small">
		<n-flex :size="0" vertical>
			<tools-accuracy-calculator-editor-name v-model:value="data"/>
			<tools-accuracy-calculator-editor-maps v-model:value="data"/>
			<tools-accuracy-calculator-editor-require-accuracy v-model:value="data"/>
		</n-flex>

		<template #footer>
			<tools-accuracy-calculator-editor-export v-model:value="data"/>
		</template>
	</n-card>
</template>