<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
		<template v-for="button in information.contacts">
			<div class="lt-md:hidden">
				<custom-button secondary size="tiny" v-bind="button"/>
			</div>

			<div class="md:hidden lt-md:w-full">
				<custom-button class="lt-md:w-full" secondary size="small" v-bind="button"/>
			</div>
		</template>
	</n-flex>
</template>