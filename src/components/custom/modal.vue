<script lang="ts" setup>

const show = ref(false)
</script>

<template>
	<slot :toggle="() => show = !show" name="trigger"/>

	<n-modal v-model:show="show" class="w-4/5 md:w-1/2" content-class="overflow-auto" v-bind="$attrs">
		<slot/>
	</n-modal>
</template>