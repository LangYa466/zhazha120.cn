<script lang="ts" setup>
import { DownloadOutlined, SaveOutlined } from '@vicons/antd'
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()

const exportData = ref<string>()
const showExportModal = ref(false)

const saveAsPreset = () => {
	exportData.value = JSON.stringify({
		$schema: '_schema.json',
		...toolsAccuracyCalculatorStore.editor
	}, null, 4)

	showExportModal.value = true
}

const downloadExport = () => {
	const exportDataValue = exportData.value

	if (exportDataValue === undefined) {
		return
	}

	const blob = new Blob([
		exportDataValue
	], {
		type: 'application/json'
	})

	const url = URL.createObjectURL(blob)
	const a = document.createElement('a')

	a.href = url
	a.download = 'preset.json'
	a.click()

	URL.revokeObjectURL(url)
}
</script>

<template>
	<div class="text-center">
		<n-button secondary type="success" @click="saveAsPreset">
			<template #icon>
				<n-icon :component="SaveOutlined"/>
			</template>

			保存为预设
		</n-button>
	</div>

	<n-modal v-model:show="showExportModal" class="modal" preset="card" title="保存结果">
		<n-flex vertical>
			<n-scrollbar x-scrollable>
				<n-code :code="exportData" language="json" show-line-numbers/>
			</n-scrollbar>

			<div class="text-center">
				<n-button @click="downloadExport">
					<template #icon>
						<n-icon :component="DownloadOutlined"/>
					</template>

					下载
				</n-button>
			</div>
		</n-flex>
	</n-modal>
</template>

<style lang="scss" scoped>
@use '~/styles/shared';
</style>