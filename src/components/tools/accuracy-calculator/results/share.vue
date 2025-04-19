<script lang="ts" setup>
import { CopyOutlined } from '@vicons/antd'
import { Share } from '@vicons/tabler'
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()

const showShareModal = ref(false)

const formats = computed(() => {
	const calculateResults = toolsAccuracyCalculatorStore.calculateResults.map(calculateResult => {
		return Number(calculateResult).toFixed(toolsAccuracyCalculatorStore.precision) + '%'
	})

	return [
		`${toolsAccuracyCalculatorStore.editor.name}\n` + calculateResults.join(' - '),

		`${toolsAccuracyCalculatorStore.editor.name}\n` + calculateResults.map((calculateResult, index) => {
			return `${calculateResult} (${toolsAccuracyCalculatorStore.editor.maps[index].title})`
		}).join('\n'),

		`${toolsAccuracyCalculatorStore.editor.name}\n` + calculateResults.map((calculateResult, index) => {
			return `第 ${index + 1} 首的准度是: ${calculateResult}`
		}).join('\n')
	]
})

const clipboard = useClipboard()

const message = useMessage()

const copy = async (text: string) => {
	if (!clipboard.isSupported.value) {
		message.error('当前环境不允许复制')
		return
	}

	await clipboard.copy(text)

	await nextTick(() => {
		if (!clipboard.copied.value) {
			message.error('复制失败')
			return
		}

		message.success('复制成功!')
	})
}
</script>

<template>
	<n-button v-bind="$attrs" @click="showShareModal = !showShareModal">
		<template #icon>
			<n-icon :component="Share"/>
		</template>

		告诉别人
	</n-button>

	<n-modal v-model:show="showShareModal" class="modal" preset="card" title="分享">
		<n-flex size="small" vertical>
			<template v-for="format in formats">
				<n-card size="small">
					<div class="whitespace-pre overflow-scroll">{{ format }}</div>

					<template #action>
						<n-flex size="small">
							<n-button @click="copy(format)">
								<template #icon>
									<n-icon :component="CopyOutlined"/>
								</template>

								复制
							</n-button>

							<template v-if="format.split('\n').length === 2">
								<n-button @click="copy(format.split('\n')[1])">
									<template #icon>
										<n-icon :component="CopyOutlined"/>
									</template>

									复制 (无标题)
								</n-button>
							</template>
						</n-flex>
					</template>
				</n-card>
			</template>
		</n-flex>
	</n-modal>
</template>

<style lang="scss" scoped>
@use '~/styles/shared';
</style>