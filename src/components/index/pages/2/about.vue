<script lang="ts" setup>
import { GithubOutlined } from '@vicons/antd'
import { website as website_stacks } from '~/data/stacks'
import { isDesktop, isMobile } from '~/shared/isMobile'
</script>

<template>
	<n-card size="small">
		<n-flex :align="isMobile ? 'center' : undefined" :vertical="isMobile" justify="space-between">
			<n-flex :vertical="isMobile" align="center" inline size="small">
				<n-flex align="center" inline size="small">
					<span>设计 & 制作:</span>

					<n-button text type="info" @click="showRedirectExternalWebsiteWarningModal('https://github.com/WOSHIZHAZHA120')">
						WOSHIZHAZHA120
					</n-button>
				</n-flex>

				<template v-if="isDesktop">
					<n-divider class="!mx-0" vertical/>
				</template>

				<n-flex align="center" inline size="small">
					<span>技术栈:</span>

					<n-flex inline size="small">
						<template v-for="stack in website_stacks">
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
				</n-flex>
			</n-flex>

			<n-flex inline>
				<n-button @click="showRedirectExternalWebsiteWarningModal('https://github.com/WOSHIZHAZHA120/zhazha120.cn')">
					<template #icon>
						<Component :is="GithubOutlined"/>
					</template>

					Github
				</n-button>
			</n-flex>
		</n-flex>
	</n-card>
</template>