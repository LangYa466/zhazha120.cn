<script generic="T, E" lang="ts" setup>
import type { AsyncData } from '#app'

defineProps<{
	readonly value: AsyncData<T, E>
}>()
</script>

<template>
	<template v-if="(value.status.value === 'idle')">
		<slot name="idle">
			<n-skeleton :repeat="10" text/>
		</slot>
	</template>

	<template v-if="(value.status.value === 'pending')">
		<slot name="pending">
			<n-spin/>
		</slot>
	</template>

	<template v-if="(value.status.value === 'success')">
		<slot :data="value.data.value" name="success"/>
	</template>

	<template v-if="(value.status.value === 'error')">
		<slot :error="value.error.value" name="error">
			<n-result :description="String(value.error.value)" size="small" status="500" title="出错了"/>
		</slot>
	</template>
</template>