<script lang="ts" setup>
import { DownloadOutlined, SaveOutlined } from '@vicons/antd'
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})

const exportData = ref<string>()
const showExportModal = ref(false)

const saveAsPreset = () => {
	exportData.value = JSON.stringify({
		$schema: '_schema.json',
		...data.value
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
	<n-flex justify="center">
		<n-button secondary type="success" @click="saveAsPreset">
			<template #icon>
				<n-icon :component="SaveOutlined"/>
			</template>

			保存为预设
		</n-button>
	</n-flex>

	<n-modal v-model:show="showExportModal" class="lt-md:w-4/5 md:w-1/2" preset="card" title="保存结果">
		<n-flex vertical>
			<n-scrollbar x-scrollable>
				<n-code :code="exportData" language="json" show-line-numbers/>
			</n-scrollbar>

			<n-flex justify="center">
				<n-button @click="downloadExport">
					<template #icon>
						<n-icon :component="DownloadOutlined"/>
					</template>

					下载
				</n-button>
			</n-flex>
		</n-flex>
	</n-modal>
</template>