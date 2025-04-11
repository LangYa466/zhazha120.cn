<script lang="ts" setup>
import friend_links from '~/data/friend_links'
</script>

<template>
	<n-flex class="lt-md:!flex-col" justify="center">
		<template v-for="friend_link in friend_links">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(friend_link.href)">
				<n-card class="md:w-fit h-full" size="small">
					<n-flex :wrap="false" align="center" class="lt-md:!justify-center h-full" size="small">
						<n-image :img-props="{ class: 'h-10' }" :src="friend_link.icon" class="rounded-full"/>

						<n-flex :size="0" vertical>
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