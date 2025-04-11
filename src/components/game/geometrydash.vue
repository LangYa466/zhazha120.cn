<script lang="ts" setup>
import geometrydash from '~/data/geometrydash'

const handleButtonClick = (button: typeof geometrydash.buttons[0]) => {
	if (!button.is_external) {
		router.push({
			path: button.href
		})

		return
	}

	showRedirectExternalWebsiteWarningModal(button.href)
}
</script>

<template>
	<n-card size="small" title="几何冲刺 (Geometry Dash)">
		<n-flex :wrap="false" align="center" class="lt-md:!flex-col">
			<n-image :img-props="{ class: 'lt-md:w-full md:h-20' }" :src="geometrydash.cube"/>

			<span class="text-3xl fw-bold">{{ geometrydash.name }}</span>
		</n-flex>

		<template #footer>
			<n-flex align="center" class="lt-md:!flex-col">
				<template v-for="button in geometrydash.buttons">
					<n-button @click="handleButtonClick(button)">
						<template #icon>
							<Component :is="button.icon()"/>
						</template>

						{{ button.name }}
					</n-button>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>