<script lang="ts" setup>
import { isMobile } from '~/shared/responsive'

definePageMeta({
	name: '定轨音游段位单曲准度计算器'
})
</script>

<template>
	<custom-sub-page>
		<n-flex :reverse="isMobile" :vertical="isMobile" :wrap="false">
			<n-flex vertical>
				<tools-accuracy-calculator-presets/>

				<tools-accuracy-calculator-editor/>
			</n-flex>

			<tools-accuracy-calculator-results/>
		</n-flex>
	</custom-sub-page>
</template>