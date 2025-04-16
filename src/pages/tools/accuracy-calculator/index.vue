<script lang="ts" setup>
definePageMeta({
	name: '定轨音游段位单曲准度计算器'
})
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<n-flex :wrap="false" class="lt-md:!flex-col-reverse">
				<n-flex class="md:min-w-1/2" vertical>
					<tools-accuracy-calculator-presets/>
					<tools-accuracy-calculator-editor/>
				</n-flex>

				<tools-accuracy-calculator-results/>
			</n-flex>
		</n-flex>
	</div>
</template>