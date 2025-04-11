<script lang="ts" setup>
import { GithubOutlined } from '@vicons/antd'
import { website as website_stacks } from '~/data/stacks'
</script>

<template>
	<n-card size="small">
		<n-flex class="lt-md:(!flex-col items-center)" justify="space-between">
			<n-flex align="center" class="lt-md:(!flex-col items-center)" size="small">
				<n-flex align="center" size="small">
					<span>设计 & 制作:</span>

					<n-button text type="info" @click="showRedirectExternalWebsiteWarningModal('https://github.com/WOSHIZHAZHA120')">
						WOSHIZHAZHA120
					</n-button>
				</n-flex>

				<div class="lt-md:hidden">
					<n-divider class="!mx-0" vertical/>
				</div>

				<n-flex align="center" size="small">
					<span>技术栈:</span>

					<n-flex size="small">
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

			<n-button @click="showRedirectExternalWebsiteWarningModal('https://github.com/WOSHIZHAZHA120/zhazha120.cn')">
				<template #icon>
					<Component :is="GithubOutlined"/>
				</template>

				Github
			</n-button>
		</n-flex>
	</n-card>
</template>