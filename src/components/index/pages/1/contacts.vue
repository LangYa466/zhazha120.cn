<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-flex align="center" class="lt-md:(!flex-col [&>*]:w-full)" justify="center">
		<template v-for="contact in information.contacts">
			<n-button size="small" strong tertiary @click="showRedirectExternalWebsiteWarningModal(contact.href)">
				<template #icon>
					<Component :is="contact.icon()"/>
				</template>

				{{ contact.name }}
			</n-button>
		</template>
	</n-flex>
</template>