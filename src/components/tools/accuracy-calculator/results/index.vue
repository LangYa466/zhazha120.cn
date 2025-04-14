<script lang="ts" setup>
import { sumBy } from 'remeda'
import { calculateAccuracy } from '~/composables/tools/accuracy-calculator'
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})

const inputs = ref<number[]>([])

const totalNotes = computed(() => {
	return sumBy(data.value.maps, map => {
		return map.notes
	})
})

const precision = ref(2)

const results = computed(() => {
	return calculateAccuracy(
		data.value.maps.map((map, index) => {
			return {
				notes: map.notes,
				accuracy: inputs.value[index] ?? null
			}
		})
	)
})

const passed = computed(() => {
	if (results.value.length !== data.value.maps.length) {
		return false
	}

	return inputs.value[inputs.value.length - 1] >= data.value.require_accuracy
})
</script>

<template>
	<n-card size="small">
		<n-flex align="center" size="small" vertical>
			<template v-for="(map, index) in data.maps">
				<n-card size="small">
					<n-flex align="center" size="small" vertical>
						<div class="text-center fw-bold">
							<n-text class="scale-80" type="info">{{ map.title }}</n-text>
						</div>

						<div class="md:text-center">
							<n-input-group>
								<n-input-number v-model:value="inputs[index]" :max="100" :min="0" :placeholder="(`第 ${index + 1} 首的准度`)" :step="0.01"/>
								<n-input-group-label>%</n-input-group-label>
							</n-input-group>
						</div>

						<n-text :depth="3" class="text-sm">{{ map.notes }} 物量 ({{ (map.notes / totalNotes * 100).toFixed(2) }}%)</n-text>
					</n-flex>
				</n-card>
			</template>

			<template v-if="results.length > 0">
				<n-divider>结果</n-divider>

				<div class="md:text-center">
					<n-input-group>
						<n-input-number v-model:value="precision" :min="0" :step="1" placeholder="小数点精度"/>
						<n-input-group-label>位</n-input-group-label>
					</n-input-group>
				</div>

				<n-card size="small">
					<n-flex align="center" class="lt-md:!flex-col" justify="center" size="small">
						<template v-for="(accuracy, index) in results">
							<tools-accuracy-calculator-results-tag v-model:value="data" :accuracy="accuracy" :precision="precision"/>

							<template v-if="index !== results.length - 1">
								<span class="lt-md:hidden">-</span>
							</template>
						</template>
					</n-flex>
				</n-card>

				<template v-if="results.length === data.maps.length">
					<div class="size-full">
						<n-alert :type="(passed ? 'success' : 'error')">
							<template v-if="passed">
								<div class="cursor-pointer w-fit mx-auto py-5 animate-spin hover:animate-duration-1">
									<span class="text-5xl">过了</span>
								</div>
							</template>

							<template v-else>
								<n-flex :size="0">
									<span class="mr-2">好可惜, 就差</span>

									<custom-hidden-number :precision="precision" :value="inputs[results.length - 1] - data.require_accuracy"/>

									<span>%</span>
								</n-flex>
							</template>
						</n-alert>
					</div>
				</template>
			</template>

			<template v-if="data.maps.length <= 0">
				<n-alert type="error">还没有数据, 试着选择一个预设或添加一首单曲</n-alert>
			</template>
		</n-flex>
	</n-card>
</template>