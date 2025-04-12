<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-flex vertical>
		<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
			<template v-for="button in information.buttons">
				<custom-button v-bind="button"/>
			</template>
		</n-flex>

		<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
			<template v-for="button in information.tools">
				<custom-button v-bind="button"/>
			</template>
		</n-flex>
	</n-flex>
</template>