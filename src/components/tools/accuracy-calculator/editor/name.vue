<script lang="ts" setup>
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()
</script>

<template>
	<n-form-item label="名称">
		<n-input v-model:value="toolsAccuracyCalculatorStore.editor.name" placeholder="请输入名称"/>
	</n-form-item>
</template>