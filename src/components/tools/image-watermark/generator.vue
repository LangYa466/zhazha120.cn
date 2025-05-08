<script lang="ts" setup>
import { CopyOutlined, DownloadOutlined } from '@vicons/antd'
import dom2image from 'dom-to-image'
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

const toolsImageWatermarkStore = useToolsImageWatermarkStore()

const container = useTemplateRef<HTMLDivElement>('container')

const generate = async () => {
	if (toolsImageWatermarkStore.image === null) {
		return
	}

	if (container.value === null) {
		return
	}

	return await dom2image.toBlob(container.value, {
		width: toolsImageWatermarkStore.image.width,
		height: toolsImageWatermarkStore.image.height
	})
}

const clipboard = useClipboardItems()

const message = useMessage()

const copy = async () => {
	if (!clipboard.isSupported.value) {
		message.error('当前环境不允许复制')
		return
	}

	const blob = await generate()

	if (blob === undefined) {
		return
	}

	await clipboard.copy([
		new ClipboardItem({
			[blob.type]: blob
		})
	])

	await nextTick(() => {
		if (!clipboard.copied.value) {
			message.error('复制失败')
			return
		}

		message.success('复制成功!')
	})
}

const download = async () => {
	const blob = await generate()

	if (blob === undefined) {
		return
	}

	const url = URL.createObjectURL(blob)

	const a = document.createElement('a')

	a.download = 'watermark.png'
	a.href = url
	a.click()
}
</script>

<template>
	<template v-if="toolsImageWatermarkStore.image !== null">
		<n-card size="small">
			<div class="size-full overflow-scroll">
				<n-flex justify="center">
					<div ref="container" :style="toolsImageWatermarkStore.sizeStyles" class="pointer-events-none relative [&>*]:(absolute top-0 left-0)">
						<n-watermark
							:content="toolsImageWatermarkStore.watermark.content"
							:cross="toolsImageWatermarkStore.watermark.cross"
							:debug="toolsImageWatermarkStore.watermark.debug"
							:font-color="toolsImageWatermarkStore.watermark.fontColor"
							:font-family="toolsImageWatermarkStore.watermark.fontFamily"
							:font-size="toolsImageWatermarkStore.watermark.fontSize"
							:font-style="toolsImageWatermarkStore.watermark.fontStyle"
							:font-variant="toolsImageWatermarkStore.watermark.fontVariant"
							:font-weight="toolsImageWatermarkStore.watermark.fontWeight"
							:fullscreen="toolsImageWatermarkStore.watermark.fullscreen"
							:global-rotate="toolsImageWatermarkStore.watermark.globalRotate"
							:height="toolsImageWatermarkStore.watermark.height"
							:image="toolsImageWatermarkStore.watermark.image"
							:image-height="toolsImageWatermarkStore.watermark.imageHeight"
							:image-opacity="toolsImageWatermarkStore.watermark.imageOpacity"
							:image-width="toolsImageWatermarkStore.watermark.imageWidth"
							:line-height="toolsImageWatermarkStore.watermark.lineHeight"
							:rotate="toolsImageWatermarkStore.watermark.rotate"
							:selectable="toolsImageWatermarkStore.watermark.selectable"
							:style="toolsImageWatermarkStore.sizeStyles"
							:text-align="toolsImageWatermarkStore.watermark.textAlign"
							:width="toolsImageWatermarkStore.watermark.width"
							:x-gap="toolsImageWatermarkStore.watermark.xGap"
							:x-offset="toolsImageWatermarkStore.watermark.xOffset"
							:y-gap="toolsImageWatermarkStore.watermark.yGap"
							:y-offset="toolsImageWatermarkStore.watermark.yOffset"
							:z-index="toolsImageWatermarkStore.watermark.zIndex"
							class="[&>*]:!size-[300%]"
						/>

						<n-image :img-props="{ style: toolsImageWatermarkStore.sizeStyles }" :src="toolsImageWatermarkStore.image.src" :style="toolsImageWatermarkStore.sizeStyles" preview-disabled/>
					</div>
				</n-flex>
			</div>

			<template #action>
				<n-flex justify="center" size="small">
					<n-button @click="copy">
						<template #icon>
							<n-icon :component="CopyOutlined"/>
						</template>

						复制
					</n-button>

					<n-button @click="download">
						<template #icon>
							<n-icon :component="DownloadOutlined"/>
						</template>

						下载
					</n-button>
				</n-flex>
			</template>
		</n-card>
	</template>
</template>