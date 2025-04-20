<script lang="ts" setup>
import { GithubOutlined } from '@vicons/antd'
import projects from '~/data/projects'
import { isDesktop, isMobile } from '~/shared/isMobile'
</script>

<template>
	<n-flex :vertical="isMobile" inline justify="center">
		<template v-for="project in projects">
			<div class="transition-(opacity duration-300) hover:opacity-50 cursor-pointer" @click="showRedirectExternalWebsiteWarningModal(`https://github.com/${project.repository}`)">
				<n-card :class="{ 'h-full': isDesktop }" size="small">
					<n-flex :class="{ 'h-full': isDesktop }" :wrap="false" align="center" inline size="small">
						<n-icon :component="GithubOutlined" class="text-10"/>

						<n-flex :size="0" inline vertical>
							<span class="fw-bold">{{ project.description }}</span>
							<n-text :depth="3" class="text-sm">{{ project.repository }}</n-text>
						</n-flex>
					</n-flex>
				</n-card>
			</div>
		</template>
	</n-flex>
</template>