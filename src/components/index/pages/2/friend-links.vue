<script lang="ts" setup>
import friend_links from '~/data/friend_links'
import { isDesktop, isMobile } from '~/shared/responsive'
</script>

<template>
	<n-flex :vertical="isMobile"  justify="center">
		<template v-for="friend_link in friend_links">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(friend_link.href)">
				<n-card class="md:h-full" size="small">
					<n-flex class="md:h-full" :wrap="false" align="center"  size="small">
						<n-image :img-props="{ class: 'size-full' }" :src="friend_link.icon" class="h-10 rounded-full" @click.stop/>

						<n-flex :size="0"  vertical>
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