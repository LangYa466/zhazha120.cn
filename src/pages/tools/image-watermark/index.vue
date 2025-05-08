<script lang="ts" setup>
import { isMobile } from '~/shared/responsive'
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

definePageMeta({
	name: '图片水印工具'
})

const toolsImageWatermarkStore = useToolsImageWatermarkStore()
</script>

<template>
	<custom-sub-page>
		<tools-image-watermark-uploader/>

		<template v-if="toolsImageWatermarkStore.image !== null">
			<n-flex :reverse="isMobile" :vertical="isMobile" :wrap="false">
				<tools-image-watermark-editor/>
				<tools-image-watermark-generator/>
			</n-flex>
		</template>
	</custom-sub-page>
</template>