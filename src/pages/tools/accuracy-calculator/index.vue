<script lang="ts" setup>
import type Preset from '~/types/tools/accuracy-calculator/preset'

definePageMeta({
	name: '定轨音游段位单曲准度计算器'
})

const data = ref<Preset>({
	name: '',
	maps: [],
	require_accuracy: 100
})
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<n-flex :wrap="false" class="lt-md:!flex-col-reverse">
				<n-flex class="md:min-w-1/2" vertical>
					<tools-accuracy-calculator-presets v-model:value="data"/>
					<tools-accuracy-calculator-editor v-model:value="data"/>
				</n-flex>

				<tools-accuracy-calculator-results v-model:value="data"/>
			</n-flex>
		</n-flex>
	</div>
</template>