<script lang="ts" setup>
import { LinkOutlined, ToolOutlined } from '@vicons/antd'
import information from '~/data/information'
import { isMobile } from '~/shared/isMobile'
import type Button from '~/types/button'

const { define: ButtonsDefine, reuse: Buttons } = createReusableTemplate<{
	readonly buttons: Button[]
}>()
</script>

<template>
	<ButtonsDefine v-slot="{ buttons }">
		<n-flex align="center" inline justify="center">
			<template v-for="button in buttons">
				<custom-button v-bind="button"/>
			</template>
		</n-flex>
	</ButtonsDefine>

	<template v-if="isMobile">
		<n-flex inline justify="center">
			<custom-modal preset="card" title="探索我">
				<template #trigger="{ toggle }">
					<n-button @click="toggle">
						<template #icon>
							<n-icon :component="LinkOutlined"/>
						</template>

						探索我
					</n-button>
				</template>

				<Buttons :buttons="information.explores"/>
			</custom-modal>

			<custom-modal preset="card" title="在线工具">
				<template #trigger="{ toggle }">
					<n-button @click="toggle">
						<template #icon>
							<n-icon :component="ToolOutlined"/>
						</template>

						小工具
					</n-button>
				</template>

				<Buttons :buttons="information.tools"/>
			</custom-modal>
		</n-flex>
	</template>

	<template v-else>
		<n-flex align="center" inline vertical>
			<template v-for="buttons in [information.explores, information.tools]">
				<Buttons :buttons="buttons"/>
			</template>
		</n-flex>
	</template>
</template>