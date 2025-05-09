<script lang="ts" setup>
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()
</script>

<template>
	<n-card size="small">
		<n-flex align="center" size="small" vertical>
			<template v-for="(map, index) in toolsAccuracyCalculatorStore.editor.maps">
				<n-card size="small">
					<n-flex align="center" size="small" vertical>
						<div class="text-center fw-bold">
							<n-text class="scale-80" type="info">{{ map.title }}</n-text>
						</div>

						<div class="md:text-center">
							<n-input-group>
								<n-input-number v-model:value="toolsAccuracyCalculatorStore.inputs[index]" :max="100" :min="0" :placeholder="(`第 ${index + 1} 首的准度`)" :step="0.01"/>
								<n-input-group-label>%</n-input-group-label>
							</n-input-group>
						</div>

						<n-text :depth="3" class="text-sm">{{ map.notes }} 物量 ({{ (map.notes / toolsAccuracyCalculatorStore.editorMapTotalNotes * 100).toFixed(2) }}%)</n-text>
					</n-flex>
				</n-card>
			</template>

			<template v-if="toolsAccuracyCalculatorStore.calculateResults.length > 0">
				<n-divider>结果</n-divider>

				<div class="md:text-center">
					<n-input-group>
						<n-input-number v-model:value="toolsAccuracyCalculatorStore.precision" :min="0" :step="1" placeholder="小数点精度"/>
						<n-input-group-label>位</n-input-group-label>
					</n-input-group>
				</div>

				<n-card size="small">
					<n-flex align="center" class="lt-md:!flex-col" justify="center" size="small">
						<template v-for="(accuracy, index) in toolsAccuracyCalculatorStore.calculateResults">
							<tools-accuracy-calculator-results-accuracy-tag :accuracy="accuracy" :precision="toolsAccuracyCalculatorStore.precision"/>

							<template v-if="index !== toolsAccuracyCalculatorStore.calculateResults.length - 1">
								<span class="desktop-only">-</span>
							</template>
						</template>
					</n-flex>
				</n-card>

				<template v-if="toolsAccuracyCalculatorStore.calculateResults.length === toolsAccuracyCalculatorStore.editor.maps.length">
					<div class="size-full">
						<template v-if="toolsAccuracyCalculatorStore.isPassed">
							<tools-accuracy-calculator-results-passed/>
						</template>

						<template v-else>
							<tools-accuracy-calculator-results-not-passed :difference="toolsAccuracyCalculatorStore.inputs[toolsAccuracyCalculatorStore.calculateResults.length - 1] - toolsAccuracyCalculatorStore.editor.require_accuracy"/>
						</template>
					</div>
				</template>
			</template>

			<template v-if="toolsAccuracyCalculatorStore.editor.maps.length <= 0">
				<n-alert type="error">还没有数据, 试着选择一个预设或添加一首单曲</n-alert>
			</template>
		</n-flex>
	</n-card>
</template>

<style lang="scss" scoped>
@use '~/styles/utils';
</style>