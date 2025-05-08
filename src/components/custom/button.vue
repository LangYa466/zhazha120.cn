<script lang="ts" setup>
import type Button from '~/types/button'

const props = defineProps<Button>()

const router = useRouter()

const handleClick = () => {
	if (!props.is_external) {
		router.push({
			path: props.href
		})

		return
	}

	showRedirectExternalWebsiteWarningModal(props.href)
}
</script>

<template>
	<n-button @click="handleClick">
		<template #icon>
			<slot name="icon">
				<Component :is="icon"/>
			</slot>
		</template>

		<slot name="content">
			<div class="overflow-scroll">
				<span>{{ props.name }}</span>
			</div>
		</slot>
	</n-button>
</template>