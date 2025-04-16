<script lang="ts" setup>
import { Archive } from '@vicons/tabler'
import type { UploadFileInfo } from 'naive-ui'
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

const toolsImageWatermarkStore = useToolsImageWatermarkStore()

const handleUploadChange = async (options: {
	readonly fileList: UploadFileInfo[]
}) => {
	toolsImageWatermarkStore.$patch({
		image: null
	})

	if (options.fileList.length !== 1) {
		return
	}

	if (options.fileList[0] === undefined) {
		return
	}

	const uploadFile = options.fileList[0]

	if (String(uploadFile.type).split('/')[0] !== 'image') {
		return
	}

	if (uploadFile.file === undefined || uploadFile.file === null) {
		return
	}

	await toolsImageWatermarkStore.processUploadFile(uploadFile)
}
</script>

<template>
	<n-card size="small">
		<n-upload :max="1" accept="image/*" directory-dnd list-type="image" @change="handleUploadChange">
			<n-upload-dragger>
				<n-flex align="center" size="small" vertical>
					<n-icon :component="Archive" :depth="3" size="48"/>
					<span>点击选择 或 拖动图片到该区域</span>
					<n-text :depth="3">无服务器 承诺不保留, 如不信任您也可以在加载完成后断网操作使用</n-text>
				</n-flex>
			</n-upload-dragger>
		</n-upload>
	</n-card>
</template>