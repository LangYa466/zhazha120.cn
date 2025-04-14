<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		readonly value: number
		readonly precision: number
	}>(),
	{
		precision: 2
	}
)

const showShort = ref(true)

const displayValue = computed(() => {
	if (showShort.value) {
		return props.value.toFixed(props.precision)
	}

	return props.value
})
</script>

<template>
	<span @click="showShort = !showShort">{{ displayValue }}</span>
</template>