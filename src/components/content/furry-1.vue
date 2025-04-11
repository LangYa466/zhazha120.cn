<template>
	<n-card size="small" title="壁纸">
		<n-flex :wrap="false" class="lt-md:!flex-col">
			<iframe class="border-none lt-md:w-full md:h-60 aspect-ratio-video" src="https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0"/>

			<n-flex class="lt-md:items-center" vertical>
				<div class="w-fit">
					<n-button @click="showRedirectExternalWebsiteWarningModal('https://steamcommunity.com/sharedfiles/filedetails?id=3424280763')">
						在 Steam 创意工坊中查看
					</n-button>
				</div>

				<n-alert type="warning">可见性为仅好友可见, 可以在首页找到我的 Steam 个人主页并添加我</n-alert>
			</n-flex>
		</n-flex>
	</n-card>
</template>