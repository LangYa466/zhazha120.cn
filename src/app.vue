<script lang="ts" setup>
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
	<n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="darkTheme">
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