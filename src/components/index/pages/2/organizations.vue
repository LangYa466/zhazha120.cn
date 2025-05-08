<script lang="ts" setup>
import organizations from '~/data/organizations'
import { isMobile } from '~/shared/responsive'
</script>

<template>
	<n-flex :vertical="isMobile" justify="center">
		<template v-for="organization in organizations">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(`https://github.com/orgs/${organization.name}`)">
				<n-card class="md:h-full" size="small">
					<n-flex :wrap="false" align="center" class="md:h-full" size="small">
						<n-image :img-props="{ class: 'size-full' }" :src="(`https://avatars.githubusercontent.com/u/${organization.avatar_id}`)" class="h-10 rounded-full" @click.stop/>

						<n-flex :size="0" vertical>
							<span class="fw-bold">{{ organization.description ?? organization.name }}</span>

							<template v-if="organization.description !== null">
								<n-text :depth="3" class="text-sm">{{ organization.name }}</n-text>
							</template>
						</n-flex>
					</n-flex>
				</n-card>
			</div>
		</template>
	</n-flex>
</template>