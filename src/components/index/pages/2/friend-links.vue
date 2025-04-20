<script lang="ts" setup>
import friend_links from '~/data/friend_links'
import { isDesktop, isMobile } from '~/shared/isMobile'
</script>

<template>
	<n-flex :vertical="isMobile" inline justify="center">
		<template v-for="friend_link in friend_links">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(friend_link.href)">
				<n-card :class="{ 'h-full': isDesktop }" size="small">
					<n-flex :class="{ 'h-full': isDesktop }" :wrap="false" align="center" inline size="small">
						<n-image :img-props="{ class: 'size-full' }" :src="friend_link.icon" class="h-10 rounded-full" preview-disabled/>

						<n-flex :size="0" inline vertical>
							<span class="fw-bold">{{ friend_link.name }}</span>

							<template v-if="friend_link.description !== null">
								<n-text :depth="3" class="text-sm">{{ friend_link.description }}</n-text>
							</template>
						</n-flex>
					</n-flex>
				</n-card>
			</div>
		</template>
	</n-flex>
</template>