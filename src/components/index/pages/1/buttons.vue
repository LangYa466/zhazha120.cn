<script lang="ts" setup>
import information from '~/data/information'

const router = useRouter()

const handleClick = (button: typeof information.buttons[0]) => {
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
	<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
		<template v-for="button in information.buttons">
			<template v-if="(button.type === 'divider')">
				<n-divider class="!mx-0" vertical/>
			</template>

			<template v-else>
				<n-button @click="handleClick(button)">
					<template #icon>
						<Component :is="button.icon()"/>
					</template>

					{{ button.name }}
				</n-button>
			</template>
		</template>
	</n-flex>
</template>