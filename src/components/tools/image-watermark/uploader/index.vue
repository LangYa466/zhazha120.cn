<script lang="ts" setup>
import { DeleteOutlined } from '@vicons/antd'
import { Archive } from '@vicons/tabler'
import type { UploadFileInfo } from 'naive-ui'
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

const toolsImageWatermarkStore = useToolsImageWatermarkStore()

const reset = () => {
	toolsImageWatermarkStore.$patch({
		image: null
	})
}

const handleUploadChange = async (options: {
	readonly fileList: UploadFileInfo[]
}) => {
	reset()

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

	await toolsImageWatermarkStore.processUploadFile(uploadFile.file)
}
</script>

<template>
	<n-card size="small">
		<template v-if="toolsImageWatermarkStore.image === null">
			<n-upload :max="1" accept="image/*" directory-dnd list-type="image" @change="handleUploadChange">
				<n-upload-dragger>
					<n-flex vertical>
						<n-flex align="center" size="small" vertical>
							<n-icon :component="Archive" :depth="3" size="48"/>
							<span>点击选择 或 拖动图片到该区域</span>
							<n-text :depth="3">无服务器 承诺不保留, 如不信任您也可以在加载完成后断网操作使用</n-text>
						</n-flex>

						<n-divider class="!my-0"/>

						<tools-image-watermark-uploader-clipboard/>
					</n-flex>
				</n-upload-dragger>
			</n-upload>
		</template>

		<template v-else>
			<n-flex justify="center">
				<n-popconfirm @positive-click="reset">
					<template #trigger>
						<n-button secondary type="error">
							<template #icon>
								<n-icon :component="DeleteOutlined"/>
							</template>

							重新选择
						</n-button>
					</template>

					确认清空吗
				</n-popconfirm>
			</n-flex>
		</template>
	</n-card>
</template>