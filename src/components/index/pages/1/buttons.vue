<script lang="ts" setup>
import { LinkOutlined, ToolOutlined } from '@vicons/antd'
import information from '~/data/information'
import type Button from '~/types/button'

const { define: ButtonsDefine, reuse: Buttons } = createReusableTemplate<{
	readonly buttons: Button[]
}>()

const showButtonsModal = ref(false)
const showToolsModal = ref(false)
</script>

<template>
	<ButtonsDefine v-slot="{ buttons }">
		<n-flex align="center" class="lt-md:!flex-col w-full" justify="center">
			<template v-for="button in buttons">
				<custom-button v-bind="button"/>
			</template>
		</n-flex>
	</ButtonsDefine>

	<div class="mobile-only">
		<n-flex justify="center">
			<n-button @click="showButtonsModal = !showButtonsModal">
				<template #icon>
					<n-icon :component="LinkOutlined"/>
				</template>

				探索我
			</n-button>

			<n-button @click="showToolsModal = !showToolsModal">
				<template #icon>
					<n-icon :component="ToolOutlined"/>
				</template>

				小工具
			</n-button>
		</n-flex>
	</div>

	<div class="desktop-only">
		<n-flex vertical>
			<Buttons :buttons="information.explores"/>
			<Buttons :buttons="information.tools"/>
		</n-flex>
	</div>

	<n-modal v-model:show="showButtonsModal" class="modal" preset="card" title="有用的按钮">
		<div class="overflow-scroll">
			<Buttons :buttons="information.explores"/>
		</div>
	</n-modal>

	<n-modal v-model:show="showToolsModal" class="modal" preset="card" title="在线工具">
		<div class="overflow-scroll">
			<Buttons :buttons="information.tools"/>
		</div>
	</n-modal>
</template>

<style lang="scss" scoped>
@use '~/styles/utils';
@use '~/styles/shared';
</style>