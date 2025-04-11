<script lang="ts" setup>
import stacks from '~/data/stacks'
</script>

<template>
	<n-flex class="md:!flex-nowrap">
		<template v-for="(_stacks, type) in stacks">
			<n-card :title="type" size="small">
				<n-flex size="small">
					<template v-for="stack in _stacks">
						<n-popover>
							<template #trigger>
								<n-button text @click="showRedirectExternalWebsiteWarningModal(stack.website)">
									<template #icon>
										<div :class="stack.icon_class"/>
									</template>
								</n-button>
							</template>

							{{ stack.name }}
						</n-popover>
					</template>
				</n-flex>
			</n-card>
		</template>
	</n-flex>
</template>