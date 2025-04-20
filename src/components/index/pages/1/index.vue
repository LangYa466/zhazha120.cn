<script lang="ts" setup>
import { isDesktop } from '~/shared/isMobile.js'
</script>

<template>
	<div :class="{ 'min-h-screen relative': isDesktop }">
		<div :class="{ 'absolute top-1/2 left-1/2 -translate-1/2': isDesktop }">
			<n-flex align="center" vertical>
				<index-pages-1-intro/>

				<index-pages-1-codetime/>

				<n-divider class="!my-0"/>

				<n-flex :vertical="isDesktop" inline justify="center" size="small">
					<index-pages-1-contacts/>
					<index-pages-1-buttons/>
				</n-flex>
			</n-flex>
		</div>
	</div>
</template>