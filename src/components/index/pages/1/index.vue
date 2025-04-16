<template>
	<div class="md:min-h-screen relative">
		<div class="md:(absolute top-1/2 left-1/2 -translate-1/2)">
			<n-flex align="center" vertical>
				<index-pages-1-intro/>

				<div class="mobile-only">
					<index-pages-1-codetime/>
				</div>

				<n-divider class="!my-0"/>

				<index-pages-1-contacts/>

				<div class="desktop-only">
					<index-pages-1-codetime/>
				</div>

				<div class="md:mt-10">
					<index-pages-1-buttons/>
				</div>
			</n-flex>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '~/styles/utils';
</style>