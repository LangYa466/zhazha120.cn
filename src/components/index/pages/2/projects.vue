<script lang="ts" setup>
import { GithubOutlined } from '@vicons/antd'
import projects from '~/data/projects'
import { isMobile } from '~/shared/responsive'
</script>

<template>
	<n-flex :vertical="isMobile" justify="center">
		<template v-for="project in projects">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(`https://github.com/${project.repository}`)">
				<n-card class="md:h-full" size="small">
					<n-flex :wrap="false" align="center" class="md:h-full" size="small">
						<n-icon :component="GithubOutlined" class="text-10"/>

						<n-flex :size="0" vertical>
							<span class="fw-bold">{{ project.description }}</span>
							<n-text :depth="3" class="text-sm">{{ project.repository }}</n-text>
						</n-flex>
					</n-flex>
				</n-card>
			</div>
		</template>
	</n-flex>
</template>