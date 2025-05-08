<script lang="ts" setup>
import information from '~/data/information'
import { isDesktop, isMobile } from '~/shared/responsive'
</script>

<template>
	<n-layout position="absolute">
		<n-layout-content class="p-2">
			<slot/>
		</n-layout-content>

		<n-layout-footer class="p-2">
			<n-flex :vertical="isMobile" align="center" justify="center" size="small">
				<span>&copy; 2025 - {{ new Date().getFullYear() }}</span>

				<template v-if="information.record !== null">
					<template v-if="isDesktop">
						<n-divider class="!mx-0" vertical/>
					</template>

					<n-button text @click="showRedirectExternalWebsiteWarningModal('https://beian.miit.gov.cn')">{{ information.record.province_abbr }} ICP 备 {{ information.record.icp_code }} 号</n-button>

					<template v-if="information.record.safety_code !== null">
						<template v-if="isDesktop">
							<n-divider class="!mx-0" vertical/>
						</template>

						<n-button text @click="showRedirectExternalWebsiteWarningModal(`https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${information.record.safety_code}`)">{{ information.record.province_abbr }}公网安备 {{ information.record.safety_code }} 号</n-button>
					</template>
				</template>
			</n-flex>
		</n-layout-footer>
	</n-layout>
</template>