<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-flex vertical>
		<template v-for="buttons in [information.buttons, information.tools]">
			<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
				<template v-for="button in buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-flex>
</template>