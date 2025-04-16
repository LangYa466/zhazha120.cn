<script lang="ts" setup>
import information from '~/data/information'
</script>

<template>
	<n-layout position="absolute">
		<n-layout-content class="p-2">
			<slot/>
		</n-layout-content>

		<n-layout-footer class="p-2">
			<n-flex :wrap="false" align="center" class="lt-md:!flex-col mx-auto" justify="center">
				<span>&copy; 2025 - {{ new Date().getFullYear() }}</span>

				<template v-if="information.record !== null">
					<div class="desktop-only">
						<n-divider class="!mx-0" vertical/>
					</div>

					<n-button text @click="showRedirectExternalWebsiteWarningModal('https://beian.miit.gov.cn')">{{ information.record.province_abbr }} ICP 备 {{ information.record.icp_code }} 号</n-button>

					<template v-if="information.record.safety_code !== null">
						<div class="desktop-only">
							<n-divider class="!mx-0" vertical/>
						</div>

						<n-button text @click="showRedirectExternalWebsiteWarningModal(`https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${information.record.safety_code}`)">{{ information.record.province_abbr }}公网安备 {{ information.record.safety_code }} 号</n-button>
					</template>
				</template>
			</n-flex>
		</n-layout-footer>
	</n-layout>
</template>

<style lang="scss" scoped>
@use '~/styles/utils';
</style>