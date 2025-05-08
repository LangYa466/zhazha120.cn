<script lang="ts" setup>
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

const toolsImageWatermarkStore = useToolsImageWatermarkStore()
</script>

<template>
	<n-card size="small">
		<n-flex vertical>
			<n-flex align="center" vertical>
				<n-form-item :show-feedback="false" label="水印文本">
					<n-input v-model:value="toolsImageWatermarkStore.watermark.content"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="是否跨越边界显示">
					<div class="mx-auto">
						<n-switch v-model:value="toolsImageWatermarkStore.watermark.cross"/>
					</div>
				</n-form-item>

				<n-form-item :show-feedback="false" label="是否显示调试信息">
					<div class="mx-auto">
						<n-switch v-model:value="toolsImageWatermarkStore.watermark.debug"/>
					</div>
				</n-form-item>

				<n-form-item :show-feedback="false" label="字体大小">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.fontSize" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="字体族">
					<n-input v-model:value="toolsImageWatermarkStore.watermark.fontFamily"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="字体风格">
					<n-input v-model:value="toolsImageWatermarkStore.watermark.fontStyle"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="字型">
					<n-input v-model:value="toolsImageWatermarkStore.watermark.fontVariant"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="字重">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.fontWeight" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" class="w-4/5" label="字体颜色">
					<n-color-picker v-model:value="toolsImageWatermarkStore.watermark.fontColor"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="是否展示全屏">
					<div class="mx-auto">
						<n-switch v-model:value="toolsImageWatermarkStore.watermark.fullscreen"/>
					</div>
				</n-form-item>

				<n-form-item :show-feedback="false" label="水印整体的旋转">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.globalRotate" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="行高">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.lineHeight" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="高度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.height" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="图片路径">
					<n-input v-model:value="toolsImageWatermarkStore.watermark.image"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="图片高度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.imageHeight" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="图片不透明度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.imageOpacity" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="图片宽度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.imageWidth" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="旋转角度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.rotate" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="被水印覆盖的内容是否可选中">
					<div class="mx-auto">
						<n-switch v-model:value="toolsImageWatermarkStore.watermark.selectable"/>
					</div>
				</n-form-item>

				<n-form-item :show-feedback="false" label="在文本有多行的情况下，多行文本的对齐方式">
					<n-input v-model:value="toolsImageWatermarkStore.watermark.textAlign"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="宽度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.width" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="x 轴间隔">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.xGap" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="x 轴偏移">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.xOffset" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="y 轴间隔">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.yGap" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="y 轴偏移">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.yOffset" :step="1"/>
				</n-form-item>

				<n-form-item :show-feedback="false" label="z 轴高度">
					<n-input-number v-model:value="toolsImageWatermarkStore.watermark.zIndex" :step="1"/>
				</n-form-item>
			</n-flex>

			<tools-image-watermark-suggests/>
		</n-flex>
	</n-card>
</template>