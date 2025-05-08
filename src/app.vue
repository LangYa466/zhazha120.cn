<script lang="ts" setup>
import highlight from 'highlight.js'
import { darkTheme, dateZhCN, type GlobalThemeOverrides, zhCN } from 'naive-ui'

const customize: GlobalThemeOverrides = {
	Card: {
		paddingSmall: '1rem'
	}
}
</script>

<template>
	<n-config-provider :date-locale="dateZhCN" :hljs="highlight" :locale="zhCN" :theme="darkTheme" :theme-overrides="customize">
		<n-dialog-provider>
			<n-loading-bar-provider>
				<n-message-provider>
					<n-modal-provider>
						<n-notification-provider>
							<global-api-provider/>

							<NuxtLayout>
								<NuxtLoadingIndicator/>
								<NuxtPage/>
							</NuxtLayout>
						</n-notification-provider>
					</n-modal-provider>
				</n-message-provider>
			</n-loading-bar-provider>
		</n-dialog-provider>
	</n-config-provider>
</template>

<style lang="scss">
@use '~/styles/transitions/page';
</style>