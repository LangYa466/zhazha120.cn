<script lang="ts" setup>
import { isDesktop } from '~/shared/responsive'
</script>

<template>
	<div class="md:(min-h-screen relative)">
		<div class="md:(absolute top-1/2 left-1/2 -translate-1/2)">
			<n-flex align="center" vertical>
				<index-pages-1-intro/>

				<index-pages-1-codetime/>

				<n-divider class="!my-0"/>

				<n-flex :vertical="isDesktop" justify="center" size="small">
					<index-pages-1-contacts/>
					<index-pages-1-buttons/>
				</n-flex>
			</n-flex>
		</div>
	</div>
</template>