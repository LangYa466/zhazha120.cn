<script lang="ts" setup>
import { isDesktop, isMobile } from '~/shared/isMobile.js'
</script>

<template>
	<n-card size="small" title="壁纸">
		<n-flex :class="{ 'w-full': isMobile }" :vertical="isMobile" :wrap="false" inline>
			<iframe :class="{ 'w-full': isMobile, 'h-60': isDesktop }" class="border-none aspect-ratio-video" src="https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0"/>

			<n-flex :class="{ 'items-center': isMobile }" inline vertical>
				<n-flex inline>
					<n-button @click="showRedirectExternalWebsiteWarningModal('https://steamcommunity.com/sharedfiles/filedetails?id=3424280763')">
						在 Steam 创意工坊中查看
					</n-button>
				</n-flex>

				<n-alert type="warning">可见性为仅好友可见, 可以在首页找到我的 Steam 个人主页并添加我</n-alert>
			</n-flex>
		</n-flex>
	</n-card>
</template>