<template>
	<div class="min-h-screen">
		<div class="container mx-auto">
			<n-flex :size="0" vertical>
				<n-divider>开发环境 & 技术栈</n-divider>

				<index-pages-2-stacks/>

				<n-divider>加入的组织</n-divider>

				<index-pages-2-organizations/>

				<n-divider>做过的项目</n-divider>

				<index-pages-2-projects/>

				<n-divider>好朋友们</n-divider>

				<index-pages-2-friend-links/>

				<n-divider>关于此网站</n-divider>

				<index-pages-2-about/>
			</n-flex>
		</div>
	</div>
</template>