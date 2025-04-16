<script lang="ts" setup>
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

definePageMeta({
	name: '图片水印工具'
})

const toolsImageWatermarkStore = useToolsImageWatermarkStore()
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<tools-image-watermark-uploader/>

			<template v-if="toolsImageWatermarkStore.image !== null">
				<n-flex :wrap="false" class="lt-md:!flex-col-reverse">
					<tools-image-watermark-editor/>
					<tools-image-watermark-generator/>
				</n-flex>
			</template>
		</n-flex>
	</div>
</template>