<script lang="ts" setup>
import organizations from '~/data/organizations'
</script>

<template>
	<n-flex class="lt-md:!flex-col" justify="center">
		<template v-for="organization in organizations">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(`https://github.com/orgs/${organization.name}`)">
				<n-card class="md:w-fit h-full" size="small">
					<n-flex :wrap="false" align="center" class="h-full" size="small">
						<n-image :img-props="{ class: 'h-10' }" :src="(`https://avatars.githubusercontent.com/u/${organization.avatar_id}`)" class="rounded-full" preview-disabled/>

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