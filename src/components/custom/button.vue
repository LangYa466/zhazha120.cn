<script lang="ts" setup>
import type Button from '~/types/button'

const props = defineProps<Button>()

const router = useRouter()

const handleClick = () => {
	if (!props.is_external) {
		router.push({ path: props.href })
		return
	}
	showRedirectExternalWebsiteWarningModal(props.href)
}
</script>

<template>
	<n-button @click="handleClick" class="w-full sm:w-auto max-w-full">
		<template #icon>
			<slot name="icon">
				<Component :is="icon" />
			</slot>
		</template>

		<slot name="content">
			<div class="text-sm sm:text-base leading-snug break-words whitespace-normal">
				<span>{{ props.name }}</span>
			</div>
		</slot>
	</n-button>
</template>
