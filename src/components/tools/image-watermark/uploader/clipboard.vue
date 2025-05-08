<script lang="ts" setup>
import { Clipboard } from '@vicons/tabler'
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

const toolsImageWatermarkStore = useToolsImageWatermarkStore()

const showMultipleImageSelectModal = ref(false)

const files = ref<File[]>([])

const clipboard = useClipboard({
	read: true
})

const message = useMessage()

const readFromClipboard = async () => {
	if (!clipboard.isSupported.value) {
		message.error('当前环境不允许复制')
		return
	}

	const items = await navigator.clipboard.read()

	files.value = []

	let index = 0

	for (const item of items) {
		for (const type of item.types) {
			if (type.startsWith('image/')) {
				const blob = await item.getType(type)

				const file = new File([blob], `${++index}.bin`, {
					type: blob.type
				})

				files.value.push(file)
			}
		}
	}

	if (files.value.length <= 0) {
		message.error('剪贴板中没有图片')
		return
	}

	if (files.value.length === 1) {
		await toolsImageWatermarkStore.processUploadFile(files.value[0])
	} else {
		showMultipleImageSelectModal.value = true
	}
}

const generatePreview = (file: File) => {
	return URL.createObjectURL(file)
}

const handleSelect = async (file: File) => {
	showMultipleImageSelectModal.value = false

	await toolsImageWatermarkStore.processUploadFile(file)
}
</script>

<template>
	<n-flex justify="center">
		<n-button @click.stop="readFromClipboard">
			<template #icon>
				<n-icon :component="Clipboard" :depth="3"/>
			</template>

			从剪贴板读取
		</n-button>
	</n-flex>

	<n-modal v-model:show="showMultipleImageSelectModal" preset="card" title="剪贴板中存在多张图片">
		<n-flex wrap>
			<template v-for="file in files">
				<n-card class="mx-2 my-2" size="small">
					<n-image :img-props="{ class: 'h-20' }" :src="generatePreview(file)" preview-disabled @click="handleSelect(file)"/>
				</n-card>
			</template>
		</n-flex>
	</n-modal>
</template>