<script lang="ts" setup>
import { FontColorsOutlined } from '@vicons/antd'
import rgbaster from 'rgbaster-plus'
import { useToolsImageWatermarkStore } from '~/stores/tools/imageWatermarkStore'

const toolsImageWatermarkStore = useToolsImageWatermarkStore()

const index = ref(0)

const colors = asyncComputed(async () => {
	if (toolsImageWatermarkStore.image === null) {
		return null
	}

	return await rgbaster(toolsImageWatermarkStore.image.src, {
		skipTransparentPixels: true
	})
}, null)

const color = computed(() => {
	if (colors.value === null) {
		return null
	}

	if (colors.value[index.value] === undefined) {
		return null
	}

	return colors.value[index.value].color
})

const applyColor = computed(() => {
	if (color.value === null) {
		return null
	}

	return 'rgba(' + color.value.split('(')[1].split(')')[0].split(',').join(', ') + ', 0.3)'
})

const apply = () => {
	if (applyColor.value === null) {
		return
	}

	toolsImageWatermarkStore.watermark.fontColor = applyColor.value
}

const applied = computed(() => {
	return toolsImageWatermarkStore.watermark.fontColor === applyColor.value
})
</script>

<template>
	<template v-if="color !== null && colors !== null">
		<n-button-group>
			<n-button :disabled="index === 0" @click="index = index - 1">-</n-button>

			<n-button :disabled="applied" @click="apply">
				<template #icon>
					<n-icon :component="FontColorsOutlined"/>
				</template>

				<span :style="{ color }">字色应用主题色 ({{ color.split('(')[1].split(')')[0].split(',').join(', ') }})</span>
			</n-button>

			<n-button :disabled="index === colors.length - 1" @click="index = index + 1">+</n-button>
		</n-button-group>
	</template>
</template>