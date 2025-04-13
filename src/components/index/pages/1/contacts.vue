<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
		<template v-for="button in information.contacts">
			<custom-button secondary size="small" v-bind="button"/>
		</template>
	</n-flex>
</template>