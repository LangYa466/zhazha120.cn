<script lang="ts" setup>
const show = ref(false)
</script>

<template>
	<slot :toggle="() => show = !show" name="trigger"/>

	<n-modal v-model:show="show" class="lt-md:w-4/5 md:w-1/2" content-class="overflow-scroll" v-bind="$attrs">
		<slot/>
	</n-modal>
</template>