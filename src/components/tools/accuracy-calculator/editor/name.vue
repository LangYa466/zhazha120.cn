<script lang="ts" setup>
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})
</script>

<template>
	<template v-if="data.name !== undefined">
		<n-form-item label="名称">
			<n-input v-model:value="data.name" placeholder="请输入名称"/>
		</n-form-item>
	</template>
</template>